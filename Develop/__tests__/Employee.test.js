const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create a class called Employee which return a type of object", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const employee = new Employee(name, id, email)

        expect(typeof employee).toBe('object')
    });

    it("should take in a name and assign to an id key", () => {
        const name = 'kyle';
        const employee = new Employee(name);

        expect(employee.name).toBe('kyle');
    });

    it("should take in a nemae that is accessible with the getName method", () => {
        const name = 'kyle';
        const employee = new Employee(name);

        expect(employee.getName()).toBe('kyle');
    });

    it("should take in an id and assign to an id key", () => {
        const name = 'kyle';
        const id = 1023;
        const employee = new Employee(name, id,)

        expect(employee.id).toBe(1023);
    });
    

    
});

