const Intern = require("../lib/Intern");

describe("Interns", () => {
    it ('should have Intern school', () => {
        const intern = new Intern('Kyle', 1023, 'kylephillips65@yahoo.com', 'NCSU');
        expect(intern.getSchool()).toEqual('NCSU');
    });

    it ('should have a role of Intern', () => {
        const intern = new Intern('Kyle', 1023, 'kylephillips65@yahoo.com', 'NCSU');
        expect(intern.getRole()).toEqual('Intern');
    });
});
