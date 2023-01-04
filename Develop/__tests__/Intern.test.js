const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Interns", () => {
    it("should create a class called Employee which return a type of object", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const school = 'NCSU';
        const intern = new Intern(name, id, email, school)

        expect(typeof intern).toBe('object')
    });



    it("should take in a name and assign to an id key", () => {
        const name = 'kyle';
        const intern = new Intern(name);

        expect(intern.name).toBe('kyle');
    });

    it("Should take in a name that is accessible with the getName method", () => {
        const name = 'kyle';
        const intern = new Intern(name);

        expect(intern.getName()).toBe('kyle');
    });



    it("should take in an id and assign to an id key", () => {
        const name = 'kyle';
        const id = 1023;
        const intern = new Intern(name, id)

        expect(intern.id).toBe(1023);
    });
    
    it("Should take in a id that is accessible with the getId method", () => {
        const name = 'kyle';
        const id = 1023;
        const intern = new Intern(name, id)
        
        expect(intern.getId()).toBe(1023);
    });



    it("should take in an email and assign to an id key", () => { 
         const name = 'kyle';
         const id = 1023;
         const email = 'kylephillips65@yahoo.com';
         const intern = new Intern(name, id, email)

         expect(intern.email).toBe('kylephillips65@yahoo.com');
    });

    it("Should take in a email that is accessible with the getEmail method", () => {
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const intern = new Intern(name, id, email) 

        expect(intern.getEmail()).toBe('kylephillips65@yahoo.com')
    });

    
    it("should take in a school and assign to an id key", () => { 
        const name = 'kyle';
        const id = 1023;
        const email = 'kylephillips65@yahoo.com';
        const school = 'NCSU';
        const intern = new Intern(name, id, email, school)

        expect(intern.school).toBe('NCSU');
   });

   it("Should take in a school that is accessible with the getSchool method", () => {
       const name = 'kyle';
       const id = 1023;
       const email = 'kylephillips65@yahoo.com';
       const school = 'NCSU';
       const intern = new Intern(name, id, email, school) 

       expect(intern.getSchool()).toBe('NCSU')
   });



});
