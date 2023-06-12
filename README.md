# Vite + TS + Knockout

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-cbenny)

## Getting started

```bash
npx degit zeekrey/vite-vanilla-ts-knockout#main vite-ts-knockout
cd vite-ts-knockout

npm install
npm run dev
```

## Motivation

Sure thing, if you are toying with the idea of using Vite, you're probably also using a modern frontend framework like React, Vue, Svelte... . And Knockout is anything but modern. **But**: I know there are still many legacy projects using Knockout (I mean, look at the "Weekly Downloads" at NPM). And exactly these projects don't want to port the whole application to a new framework but still use a more modern bundler like Vite is. This is for exactly those projects.

## Hints

- Don't forget to add `?raw` to the end of your `import` statements if you want to import html. Here is an example: `import template from './template.html?raw';`
- If you want to import assets and use them in your templates export them as strings from `*.ts` files. See `main.ts` for an example.
- To mimic a modern context API, you can use knockouts binding context. While you can access each component's context via `$component`, or `$parent[n]` to access the parent context, you can also access the root context via `$root`. See this section in `main.ts` for an example:

```javascript
function rootModel() {
  return {
    context: "Hello from the root model",
  };
}

ko.applyBindings(rootModel);
```
