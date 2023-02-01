const Employee = require('../lib/class')

describe("Employee", () => {
    const employee = new Employee();


test("defines getName()", () => {
    expect(typeof employee.getName).toBe("function");
});
});
  

