const Manager = require('../lib/class')

describe("Manager", () => {
    const manager = new Manager();


test("defines getId()", () => {
    expect(typeof manager.getId).toBe("function");
});
});
  

