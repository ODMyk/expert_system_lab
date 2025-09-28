import { isCancel, select } from "@clack/prompts";

import type { ClassType } from "../../domain";
import { RELATIONSHIPS, RelationshipType } from "../../domain";
import { interrupt } from "../interrupt";
import { classOptions } from "../options";

export async function getAllRealizationsScenario() {
  const className = await select({
    message: "Select object",
    options: classOptions,
  });

  if (isCancel(className)) {
    interrupt();
  }

  const realizations = new Set<ClassType>();
  const queue: ClassType[] = [className];

  while (queue.length > 0) {
    const current = queue.shift()!;

    const children = RELATIONSHIPS.filter(
      (rel) => rel.type === RelationshipType.Is && rel.to === current,
    ).map((rel) => rel.from);

    for (const child of children) {
      if (!realizations.has(child)) {
        realizations.add(child);
        queue.push(child);
      }
    }
  }

  const answer =
    realizations.size > 0 ? Array.from(realizations).join(", ") : "None";

  return {
    question: `What are all the descendants of the class ${className} ?`,
    answer,
  };
}
