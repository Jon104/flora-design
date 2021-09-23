const reportWebVitals = require("./reportWebVitals");
// @ponicode
describe("reportWebVitals.default", () => {
  test("0", () => {
    let result = reportWebVitals.default(undefined);
    expect(result).toBe(undefined);
  });
});
