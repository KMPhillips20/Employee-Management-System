const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const pickManger = () => {
    return inquirer.createPromptModule([
        {
            type: "input",
            message: "Mangers Name",
            name: "name",
        },
        {
            type: "input",
            message: "Managers ID number",
            name: "ID",
        },
        {
            type: "input",
            message: "Managers Email",
            name: "email",
        },
        {
            type: "input",
            message: "Managers Office Number",
            name: "phoneNumber",
        },
    ])
}