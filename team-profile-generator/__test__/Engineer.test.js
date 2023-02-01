const Engineer = require('../lib/class')

describe("Engineer", () => {
    const engineer = new Engineer();

test("defines getRole()", () => {
    expect(typeof engineer.getRole).toBe("function");
});
});
