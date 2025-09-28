import { intro, isCancel, log, outro, select } from "@clack/prompts";

import { Scenario } from "./domain";
import { interrupt } from "./services/interrupt";
import { createOptions } from "./services/options";
import { processScenario } from "./services/scenarios";

const scenarioOptions = createOptions(Scenario);

while (true) {
  try {
    intro("New question");

    const scenario = await select({
      message: "Select mode",
      options: scenarioOptions,
    });

    if (isCancel(scenario)) {
      interrupt();
    }

    const { question, answer } = await processScenario(scenario);

    log.info(`Question: ${question}`);
    log.info(`Answer: ${answer}`);

    outro("Thanks for asking! I am ready to answer another question");
  } catch {
    outro("Program interrupted by user");
    break;
  }
}
