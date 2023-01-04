const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const Employee = require("./Employee");

class Engineer extends Employee {
        constructor(name, id, email, gitHub) {
            super(name, id, email);
            this.name = name;
            this.id = id;
            this.email = email;
            this.gitHub = 'https://github.com/' + gitHub + '/';
            this.position = 'Engineer'
        }

        getName() {
            return this.name
        }
    
        getId() {
            return this.id
        }
    
        getEmail() {
            return this.email
        }

        getGitHub() {
            return this.gitHub
        }
    
        getPosition() {
            return this. position
        }
    }
    
module.exports = Engineer;
