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

LoadingButton.definition;

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
