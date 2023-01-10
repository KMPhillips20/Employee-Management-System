const Employee = require("../lib/Employee");

describe("Employee", () => {

    it ("should have an Employee name", () => {
        const employee = new Employee('Kyle', 1023, 'kylephillips65@yahoo.com');
        expect(employee.name).toEqual('Kyle');
    });
    it ('should have an Employee id', () => {
        const employee = new Employee('Kyle', 1023, 'kylephillips65@yahoo.com');
        expect(employee.id).toEqual(1023);
    });
    it ('should have an Employee email', () => {
        const employee = new Employee('Kyle', 1023, 'kylephillips65@yahoo.com');
        expect(employee.email).toEqual('kylephillips65@yahoo.com');
    });
    it ('should have an Employee role', () => {
        const employee = new Employee('Kyle', 1023, 'kylephillips65@yahoo.com');
        expect(employee.getRole()).toEqual('Employee');
    });
});