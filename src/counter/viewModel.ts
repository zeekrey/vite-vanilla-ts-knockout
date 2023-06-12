import ko from "knockout";

export function counter(params: { initialValue: number }) {
  const count = ko.observable(params.initialValue);

  function incrementCount() {
    count(count() + 1);
  }

  return {
    count,
    incrementCount,
  };
}

export default counter;
