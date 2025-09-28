import { Scenario, type ScenarioPrompt } from "../../domain/Scenario";

import { checkRelationScenario } from "./checkRelationScenario";
import { getAllClassesScenario } from "./getAllClassesScenario";
import { getAllPropertiesScenario } from "./getAllPropertiesScenario";
import { getAllRealizationsScenario } from "./getAllRealizationsScenario";
import { getObjectsWithPropertyScenario } from "./getObjectsWithPropertyScenario";

export const SCENARIOS_PROMPTS: Record<Scenario, ScenarioPrompt> = {
  [Scenario.CheckRelation]: checkRelationScenario,
  [Scenario.GetAllClasses]: getAllClassesScenario,
  [Scenario.GetAllProperties]: getAllPropertiesScenario,
  [Scenario.GetAllRealizations]: getAllRealizationsScenario,
  [Scenario.GetObjectsWithProperty]: getObjectsWithPropertyScenario,
};

export async function processScenario(scenario: Scenario) {
  return await SCENARIOS_PROMPTS[scenario]();
}
