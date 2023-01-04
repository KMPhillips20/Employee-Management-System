const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create a class called Engineer which return a type of object", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const gitHub = 'KMPhillips20';
        const engineer = new Engineer(name, id, email, gitHub)

        expect(typeof engineer).toBe('object')
    });


    it("should take in a name and assign to an id key", () => {
        const name = 'kyle';
        const engineer = new Engineer(name);

        expect(engineer.name).toBe('kyle');
    });

    it("Should take in a name that is accessible with the getName method", () => {
        const name = 'kyle';
        const engineer = new Engineer(name);

        expect(engineer.getName()).toBe('kyle')
    });



    it("should take in an id and assign to an id key", () => {
        const name = 'kyle';
        const id = 1023;
        const engineer = new Engineer(name, id)

        expect(engineer.id).toBe(1023);
    });

    it("Should take in a id that is accessible with the getId method", () => {
        const name = 'kyle';
        const id = 1023;
        const engineer = new Engineer(name, id)
        
        expect(engineer.getId()).toBe(1023);
    });


    it("should take in an email and assign to an id key", () => { 
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const engineer = new Engineer(name, id, email)

        expect(engineer.email).toBe('kylephillips65@yahoo.com');
   });

   it("Should take in a email that is accessible with the getEmail method", () => {
       const name = 'kyle';
       const id = 1023;
       const email = 'kylephillips65@yahoo.com';
       const engineer = new Engineer(name, id, email) 

       expect(engineer.getEmail()).toBe('kylephillips65@yahoo.com')
   });



   it("should take in an gitHub and assign to an id key", () => { 
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const gitHub = 'KMPhillips20'
        const engineer = new Engineer(name, id, email, gitHub)

        expect(engineer.gitHub).toBe('https://github.com/KMPhillips20/');
    });

    it("Should take in a email that is accessible with the getHub method", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips@yahoo.com';
        const gitHub = 'KMPhillips20'
        const engineer = new Engineer(name, id, email, gitHub) 

   expect(engineer.getGitHub()).toBe('https://github.com/KMPhillips20/')
});



    
});
