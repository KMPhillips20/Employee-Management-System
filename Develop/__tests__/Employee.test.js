const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee('Kyle Phillips', 1023, 'kylephillips65@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain('@');
    expect(employee.id).toEqual(expect.any(Number));
});
