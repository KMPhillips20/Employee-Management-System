const Employee = require("./Employee");

class Engineer extends Employee {
        constructor(name, id, email, gitHub) {
            super(name, id, email);
            this.gitHub = 'https://github.com/' + gitHub + '/';
        }
    }
module.exports = Engineer;
