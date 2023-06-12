import "./style.css";
import typescriptLogo from "./typescript.svg";
import ko from "knockout";

/** Import all components here */
import "./counter";
import "./consumer";

/**
 * You can put the view model and the template in the same file (main.ts).
 * Or separate them like the counter example (./counter).
 */

function viewModel(params: { initialText: string }) {
  const text = ko.observable(params.initialText);

  return {
    text,
  };
}

const template = `
<div id="app">
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <h1 data-bind="text: text()"></h1>

  <! -- Counter component -->
  <div data-bind='component: {
    name: "counter",
    params: { initialValue: 0 }
  }'></div>
  <! -- Counter component -->

  <! -- Consumer component -->
  <div data-bind='component: {
    name: "consumer",
    params: { context: $root }
  }'></div>
  <! -- Consumer component -->

  <p class="read-the-docs">
    Click on the Vite and TypeScript logos to learn more
  </p>
</div>`;

ko.components.register("main", {
  viewModel,
  template,
});

function rootModel() {
  return {
    context: "Hello from the root model",
  };
}

ko.applyBindings(rootModel);
