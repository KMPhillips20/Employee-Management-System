const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create a class called Employee which return a type of object", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const officeNumber = 7041234567;
        const manager = new Manager(name, id, email, officeNumber)

        expect(typeof manager).toBe('object')
    });



    it("should take in a name and assign to an id key", () => {
        const name = 'kyle';
        const manager = new Manager(name);

        expect(manager.name).toBe('kyle');
    });

    it("Should take in a name that is accessible with the getName method", () => {
        const name = 'kyle';
        const manager = new Manager(name);

        expect(manager.getName()).toBe('kyle');
    });



    it("should take in an id and assign to an id key", () => {
        const name = 'kyle';
        const id = 1023;
        const manager = new Manager(name, id)

        expect(manager.id).toBe(1023);
    });
    
    it("Should take in a id that is accessible with the getId method", () => {
        const name = 'kyle';
        const id = 1023;
        const manager = new Manager(name, id)
        
        expect(manager.getId()).toBe(1023);
    });



    it("should take in an email and assign to an id key", () => { 
         const name = 'kyle';
         const id = 1023;
         const email = 'kylephillips65@yahoo.com';
         const manager = new Manager(name, id, email)

         expect(manager.email).toBe('kylephillips65@yahoo.com');
    });

    it("Should take in a email that is accessible with the getEmail method", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const manager = new Manager(name, id, email) 

        expect(manager.getEmail()).toBe('kylephillips65@yahoo.com')
    });

    it("should take in a officeNumber and assign to an id key", () => { 
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const officeNumber = 7041234567;
        const manager = new Manager(name, id, email, officeNumber)

        expect(manager.officeNumber).toBe(7041234567);
   });

   it("Should take in a officeNumber that is accessible with the getSchool method", () => {
       const name = 'kyle';
       const id = 1023;
       const email = 'kylephillips65@yahoo.com';
       const officeNumber = 7041234567;
       const manager = new Manager(name, id, email, officeNumber) 

       expect(manager.getOfficeNumber()).toBe(7041234567)
   });



    
});

