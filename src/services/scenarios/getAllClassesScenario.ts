import { isCancel, select } from "@clack/prompts";

import type { ClassType } from "../../domain";
import { RELATIONSHIPS, RelationshipType } from "../../domain";
import { interrupt } from "../interrupt";
import { classOptions } from "../options";

export async function getAllClassesScenario() {
  const object = await select({
    message: "Select object",
    options: classOptions,
  });

  if (isCancel(object)) {
    interrupt();
  }

  const hierarchy: ClassType[] = [object];
  const visited = new Set<ClassType>([object]);
  let currentClass: ClassType | undefined = object;

  while (currentClass) {
    const parentRel = RELATIONSHIPS.find(
      (rel) => rel.from === currentClass && rel.type === RelationshipType.Is,
    );

    if (parentRel && !visited.has(parentRel.to)) {
      hierarchy.push(parentRel.to);
      visited.add(parentRel.to);
      currentClass = parentRel.to;
    } else {
      break;
    }
  }

  const answer =
    hierarchy.length > 0
      ? hierarchy.reverse().join(" -> ")
      : `No class hierarchy found for ${object}`;

  return {
    question: `What are all the ancestors of the ${object} ?`,
    answer: answer,
  };
}
