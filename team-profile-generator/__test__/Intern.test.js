const Intern = require('../lib/class')

describe("Intern", () => {
    const intern = new Intern();


test("defines getEmail()", () => {
    expect(typeof intern.getEmail).toBe("function");
});
});
  

