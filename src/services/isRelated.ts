import type { ClassType } from "../system";
import { RELATIONSHIPS } from "../system";

export function isRelated(from: ClassType, to: ClassType): boolean {
  const queue = [from];
  const visited = new Set([from]);

  while (queue.length > 0) {
    const currentClass = queue.shift();

    if (currentClass === to) {
      return true;
    }

    for (const relation of RELATIONSHIPS) {
      if (relation.from === currentClass && !visited.has(relation.to)) {
        visited.add(relation.to);
        queue.push(relation.to);
      }
    }
  }

  return false;
}
