import ko from "knockout";

export function consumer(params: { context: {} }) {
  const context = ko.observable(params.context);

  return {
    context,
  };
}

export default consumer;
