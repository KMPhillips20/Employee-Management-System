const Manager = require("../lib/Manager");

describe("Manager", () => {
   
    it ('should have Manager Office Number', () => {
        const manager = new Manager('Kyle', 1023, 'kylephillips65@yahoo.com', 2040);
        expect(manager.getOfficeNumber()).toEqual(2040);
    });

    it ('should have a role of Manager', () => {
        const manager = new Manager('Kyle', 1023, 'kylephillips65@yahoo.com', 2040);
        expect(manager.getRole()).toEqual('Manager');
    });
});

