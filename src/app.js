import {
  CitationDefinition,
  TextareaDefinition,
  CitationReferenceDefinition,
  ReferenceDefinition,
} from "@fabric-msft/copilot-web";
import { fabricLightTheme, setTheme } from "@horizon-msft/theme";

TextareaDefinition.define(customElements);
CitationDefinition.define(customElements);
CitationReferenceDefinition.define(customElements);
ReferenceDefinition.define(customElements);

const components = /* html */ `
      <div>
        <fabric-textarea></fabric-textarea>
      </div>
      <div>
        <fabric-citation href="/">
          <span slot="start">Citation</span>
          <span slot="index">1</span>
          <div slot="popover">Popover Content</div>
        </fabric-citation>
      </div>
      <div>
        <fabric-citation>
          <span slot="start">Citation With Reference</span>
          <span slot="index">2</span>
          <fabric-citation-reference citation-href="https://bing.com">
            <span slot="index">1</span>
            <span slot="label">Citation Reference</span>
            <span slot="metadata-text-one">Citation Metadata One</span>
            <span slot="metadata-text-two">Citation Metadata Two</span>
            <span slot="excerpt">Article Excerpt</span>
            <svg
              slot="reference-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 7H15.5C14.673 7 14 6.327 14 5.5V2H6V18H18V7Z"
                fill="white"
              />
              <path
                d="M18 5.99997V5.70697L15 2.70697V5.49997C15 5.77497 15.225 5.99997 15.5 5.99997H18Z"
                fill="white"
              />
              <path
                opacity="0.67"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.707 5L15 1.293C14.8125 1.10545 14.5582 1.00006 14.293 1H6C5.44772 1 5 1.44772 5 2V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V5.707C18.9999 5.4418 18.8945 5.18749 18.707 5ZM18 5.707V6H15.5C15.2241 5.99945 15.0006 5.77591 15 5.5V2.707L18 5.707ZM6 2.2V17.8C6 17.9105 6.08954 18 6.2 18H17.8C17.9105 18 18 17.9105 18 17.8V7H15.5C14.6716 7 14 6.32843 14 5.5V2H6.2C6.09 2 6 2.09 6 2.2Z"
                fill="#605E5C"
              />
              <path
                d="M16.5 12H12V13H16.5C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12Z"
                fill="#185ABD"
              />
              <path
                d="M16.5 10H12V11H16.5C16.7761 11 17 10.7761 17 10.5C17 10.2239 16.7761 10 16.5 10Z"
                fill="#2B7CD3"
              />
              <path
                d="M16.5 8H12V9H16.5C16.7761 9 17 8.77614 17 8.5C17 8.22386 16.7761 8 16.5 8Z"
                fill="#41A5EE"
              />
              <path
                d="M2 16H10C10.5523 16 11 15.5523 11 15V7C11 6.44772 10.5523 6 10 6H2C1.44772 6 1 6.44772 1 7V15C1 15.5523 1.44772 16 2 16Z"
                fill="#185ABD"
              />
              <path
                d="M7.20988 13.936L5.99988 9.49599L4.79388 13.936H3.91788L2.75488 8.09399H3.64088L4.44888 11.92L5.52288 8.09399H6.38888L7.54188 12.01L8.34388 8.09399H9.22888L8.08488 13.936H7.20988Z"
                fill="white"
              />
            </svg>
          </fabric-citation-reference>
        </fabric-citation>
      </div>
      <div>
        <fabric-reference>
          <span slot="index">3</span>
          <span slot="label">fabric Reference</span>
          <span slot="metadata-text-one">Text One</span>
          <span slot="metadata-text-two">Text Two</span>
          <span slot="excerpt">Excerpt</span>
          <svg
            slot="reference-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7H15.5C14.673 7 14 6.327 14 5.5V2H6V18H18V7Z"
              fill="white"
            />
            <path
              d="M18 5.99997V5.70697L15 2.70697V5.49997C15 5.77497 15.225 5.99997 15.5 5.99997H18Z"
              fill="white"
            />
            <path
              opacity="0.67"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.707 5L15 1.293C14.8125 1.10545 14.5582 1.00006 14.293 1H6C5.44772 1 5 1.44772 5 2V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V5.707C18.9999 5.4418 18.8945 5.18749 18.707 5ZM18 5.707V6H15.5C15.2241 5.99945 15.0006 5.77591 15 5.5V2.707L18 5.707ZM6 2.2V17.8C6 17.9105 6.08954 18 6.2 18H17.8C17.9105 18 18 17.9105 18 17.8V7H15.5C14.6716 7 14 6.32843 14 5.5V2H6.2C6.09 2 6 2.09 6 2.2Z"
              fill="#605E5C"
            />
            <path
              d="M16.5 12H12V13H16.5C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12Z"
              fill="#185ABD"
            />
            <path
              d="M16.5 10H12V11H16.5C16.7761 11 17 10.7761 17 10.5C17 10.2239 16.7761 10 16.5 10Z"
              fill="#2B7CD3"
            />
            <path
              d="M16.5 8H12V9H16.5C16.7761 9 17 8.77614 17 8.5C17 8.22386 16.7761 8 16.5 8Z"
              fill="#41A5EE"
            />
            <path
              d="M2 16H10C10.5523 16 11 15.5523 11 15V7C11 6.44772 10.5523 6 10 6H2C1.44772 6 1 6.44772 1 7V15C1 15.5523 1.44772 16 2 16Z"
              fill="#185ABD"
            />
            <path
              d="M7.20988 13.936L5.99988 9.49599L4.79388 13.936H3.91788L2.75488 8.09399H3.64088L4.44888 11.92L5.52288 8.09399H6.38888L7.54188 12.01L8.34388 8.09399H9.22888L8.08488 13.936H7.20988Z"
              fill="white"
            />
          </svg>
        </fabric-reference>
      </div>
`;

function injectComponents() {
  const main = document.querySelector("main");

  main.innerHTML = components;
}

setTheme(fabricLightTheme, undefined, injectComponents);
