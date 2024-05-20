import {
  CitationDefinition,
  TextareaDefinition,
  CitationReferenceDefinition,
  ReferenceDefinition,
  ReferenceList,
  ReferenceGroup,
  ReferenceListDefinition,
  ReferenceGroupDefinition,
} from "@fabric-msft/copilot-web";
import { fabricLightTheme, setTheme } from "@fabric-msft/theme";
import { ReferenceGroupEl } from "./components/reference";
import { Citation, CitationReference } from "./components/citation";
import LoadingButton from "./components/loading-button";

import {
  LoadingButtonDefinition,
  PopoverDefinition,
  TeachingBubbleDefinition,
  MultiViewDefinition,
  WizardDefinition,
  WizardPanelDefinition,
  WizardStepDefinition,
  SvgIconDefinition,
} from "@fabric-msft/fabric-web";

LoadingButton.definition;
SvgIconDefinition.define(customElements);
WizardDefinition.define(customElements);
WizardPanelDefinition.define(customElements);
WizardStepDefinition.define(customElements);
MultiViewDefinition.define(customElements);
TeachingBubbleDefinition.define(customElements);
PopoverDefinition.define(customElements);
// LoadingButtonDefinition.define(customElements);

TextareaDefinition.define(customElements);
CitationDefinition.define(customElements);
CitationReferenceDefinition.define(customElements);
ReferenceDefinition.define(customElements);
ReferenceListDefinition.define(customElements);
ReferenceGroupDefinition.define(customElements);

// <div class="citationReference">
//   ${CitationReference({
//     index: 1,
//     label: "Citation Reference",
//     meta1: "Citation Metadata One",
//     meta2: "Citation Metadata Two",
//     excerpt: "Article Excerpt",
//     href: "www.bing.com",
//   })}
// </div>

// <div class="referenceGroup">
//   ${ReferenceGroupEl()}
// </div>

const components = /* html */ `
      <div>
        ${LoadingButton.component({ loading: true, text: "Loading Button" })}
      </div>

      <div class="textArea">
        <fabric-textarea></fabric-textarea>
      </div>
`;

function injectComponents() {
  const main = document.querySelector("main");

  main.innerHTML = components;
}

setTheme(fabricLightTheme, undefined, injectComponents);
