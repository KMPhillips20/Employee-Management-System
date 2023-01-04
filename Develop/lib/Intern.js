const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.position = 'Intern';
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

    getSchool() {
        return this.school
    }

    getPosition() {
        return this. position
    }


}


module.exports = Intern;
