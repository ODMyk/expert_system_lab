import { group, select } from "@clack/prompts";

import type { ClassType } from "../../domain";
import { RELATIONSHIPS, RelationshipType } from "../../domain";
import { interrupt } from "../interrupt";
import { classOptions } from "../options";

export async function checkRelationScenario() {
  const { fromObject, toObject } = await group(
    {
      fromObject: () =>
        select({
          message: "Select first object",
          options: classOptions,
        }),

      toObject: () =>
        select({
          message: "Select second object",
          options: classOptions,
        }),
    },
    {
      onCancel: () => {
        interrupt();
      },
    },
  );

  const queue: ClassType[] = [fromObject];
  const visited: Set<ClassType> = new Set([fromObject]);
  let isRelated = false;

  while (queue.length > 0) {
    const currentClass = queue.shift();

    if (currentClass === toObject) {
      isRelated = true;
      break;
    }

    for (const rel of RELATIONSHIPS) {
      // Пропускаємо Exception зв’язки - вони не є структурними ребрами графа
      if (rel.type === RelationshipType.Exception) continue;

      if (rel.from === currentClass) {
        if (!visited.has(rel.to)) {
          visited.add(rel.to);
          queue.push(rel.to);
        }
      } else if (rel.to === currentClass) {
        if (!visited.has(rel.from)) {
          visited.add(rel.from);
          queue.push(rel.from);
        }
      }
    }
  }

  return {
    question: `Is there a relationship between ${fromObject} and ${toObject} ?`,
    answer: isRelated ? "Yes" : "No",
  };
}
