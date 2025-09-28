import { isCancel, select } from "@clack/prompts";

import type { ClassType } from "../../domain";
import { RELATIONSHIPS, RelationshipType } from "../../domain";
import { interrupt } from "../interrupt";
import { classOptions } from "../options";

export async function getAllPropertiesScenario() {
  const object = await select({
    message: "Select object",
    options: classOptions,
  });

  if (isCancel(object)) {
    interrupt();
  }

  const chain: ClassType[] = [];
  let currentClass: ClassType | undefined = object;

  while (currentClass) {
    chain.unshift(currentClass);
    const parentRel = RELATIONSHIPS.find(
      (rel) => rel.from === currentClass && rel.type === RelationshipType.Is,
    );
    currentClass = parentRel?.to;
  }

  const properties = new Set<string>();

  for (const cls of chain) {
    RELATIONSHIPS.filter(
      (rel) => rel.from === cls && rel.type === RelationshipType.HasProperty,
    ).forEach((rel) => properties.add(rel.to));

    RELATIONSHIPS.filter(
      (rel) => rel.type === RelationshipType.PartOf && rel.to === cls,
    ).forEach((rel) => properties.add(rel.from));

    RELATIONSHIPS.filter(
      (rel) => rel.from === cls && rel.type === RelationshipType.Exception,
    ).forEach((rel) => properties.delete(rel.to));
  }

  const answer =
    properties.size > 0 ? Array.from(properties).join(", ") : "None";

  return {
    question: `What are all the properties of the ${object} ?`,
    answer: answer,
  };
}
