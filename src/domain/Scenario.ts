export interface Result {
  question: string;
  answer: string;
}

export type ScenarioPrompt = () => Promise<Result>;

export enum Scenario {
  CheckRelation = "Check if a direct or indirect relationship exists between two objects",
  GetAllClasses = "Get all ancestors of a class",
  GetAllRealizations = "Get all descendants of a class",
  GetAllProperties = "Get all properties of an object",
  GetObjectsWithProperty = "Get all objects with a specific property",
}
