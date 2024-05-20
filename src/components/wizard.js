import { WizardDefinition } from "@fabric-msft/fabric-web";

const Wizard = () => /* html */ ``;

export default {
  definition: () => {
    WizardDefinition.define(customElements);
    WizardPanelDefinition.define(customElements);
    WizardStepDefinition.define(customElements);
  },
  component: Wizard,
};
