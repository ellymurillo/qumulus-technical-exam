import testRenderer from "./testRenderers";

const parse: (obj: object) => object = function(obj): object {
  return JSON.parse(JSON.stringify(obj));
}

export { parse, testRenderer };