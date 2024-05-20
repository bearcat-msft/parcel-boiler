import { LoadingButtonDefinition } from "@fabric-msft/fabric-web";

const LoadingButton = ({ loading, text }) => /* html */ `
    <fabric-loading-button loading="${loading}">${text}</fabric-Loading-button>
`;

export default {
  definition: LoadingButtonDefinition.define(customElements),
  component: LoadingButton,
};
