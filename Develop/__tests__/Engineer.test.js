const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create a class called Engineer which return a type of object", () => {
        const name = 'melissa';
        const id = 1024;
        const email = 'melphillips66@yahoo.com';
        const engineer = new Engineer(name, id, email)

        expect(typeof employee).toBe('object')
    });


    it("should take in a name and assign to an id key", () => {
        const name = 'melissa';
        const engineer = new Engineer(name);

        expect(engineer.name).toBe('melissa');
    });

    it("Should take in a name that is accessible with the getName method", () => {
        const name = 'melissa';
        const engineer = new Engineer(name);

        expect(engineer.getName()).toBe('melissa')
    });



    it("should take in an id and assign to an id key", () => {
        const name = 'melissa';
        const id = 1024;
        const engineer = new Engineer(name, id)

        expect(engineer.id).toBe(1024);
    });

    it("Should take in a id that is accessible with the getId method", () => {
        const name = 'melissa';
        const id = 1024;
        const engineer = new Engineer(name, id)
        
        expect(engineer.getId()).toBe(1023);
    });


    it("should take in an email and assign to an id key", () => { 
        const name = 'melissa';
        const id = 1024;
        const email = 'melphillips66@yahoo.com';
        const engineer = new Engineer(name, id, email)

        expect(engineer.email).toBe('melphillips66@yahoo.com');
   });

   it("Should take in a email that is accessible with the getEmail method", () => {
       const name = 'melissa';
       const id = 1024;
       const email = 'melphillips66@yahoo.com';
       super(name, id, email);
       const engineer = new Engineer(name, id, email) 

       expect(engineer.getEmail()).toBe('melphillips66@yahoo.com')
   });


    
});
