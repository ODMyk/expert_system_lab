import { isCancel, select } from "@clack/prompts";

import type { ClassType } from "../../domain";
import { RELATIONSHIPS, RelationshipType } from "../../domain";
import { interrupt } from "../interrupt";
import { classOptions } from "../options";

export async function getObjectsWithPropertyScenario() {
  const property = await select({
    message: "Select property or part",
    options: classOptions,
  });

  if (isCancel(property)) {
    interrupt();
  }

  const directHasPropertyOwners = RELATIONSHIPS.filter(
    (rel) => rel.type === RelationshipType.HasProperty && rel.to === property,
  ).map((rel) => rel.from);

  const directPartOfOwners = RELATIONSHIPS.filter(
    (rel) => rel.type === RelationshipType.PartOf && rel.from === property,
  ).map((rel) => rel.to);

  const directOwners = [
    ...new Set([...directHasPropertyOwners, ...directPartOfOwners]),
  ];

  const allOwners = new Set<ClassType>();
  const queue = [...directOwners];

  while (queue.length > 0) {
    const current = queue.shift()!;

    if (allOwners.has(current)) continue;

    const hasException = RELATIONSHIPS.some(
      (rel) =>
        rel.type === RelationshipType.Exception &&
        rel.from === current &&
        rel.to === property,
    );

    if (!hasException) {
      allOwners.add(current);

      const children = RELATIONSHIPS.filter(
        (rel) => rel.type === RelationshipType.Is && rel.to === current,
      ).map((rel) => rel.from);

      queue.push(...children);
    }
  }

  const answer = allOwners.size > 0 ? Array.from(allOwners).join(", ") : "None";

  return {
    question: `What are all the objects that have the property or part ${property} ?`,
    answer,
  };
}
