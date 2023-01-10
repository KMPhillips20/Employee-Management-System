const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
   
    it ('should have Engineer GitHub', () => {
        const engineer = new Engineer('Kyle', 1023, 'kylephillips65@yahoo.com', 'KMPhillips20');
        expect(engineer.getGitHub()).toEqual('KMPhillips20');
    });

    it ('should have a role of Enginner', () => {
        const engineer = new Engineer('Kyle', 1023, 'kylephillips65@yahoo.com', 'KMPhillips20');
        expect(engineer.getRole()).toEqual('Engineer');
    });

});
