const Engineer = require("../lib/Engineer");

describe("Engineer has a github account", () => {
    const engineer = new Engineer ('Kyle Phillips', 1023, 'kylephillips65@yahoo.com', 'KMPhillips20');

    expect(engineer.github).toEqual(expect.any(String));
});
