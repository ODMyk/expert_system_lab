import type { Option } from "@clack/prompts";

import { ClassType, Scenario } from "../domain";

export function createOptions<T>(source: Record<string, T>) {
  return Object.values(source).map((value) => ({
    label: String(value),
    value,
  }));
}

export const classOptions = createOptions(ClassType) as Option<ClassType>[];

export const scenarioOptions = createOptions(Scenario) as Option<Scenario>[];
