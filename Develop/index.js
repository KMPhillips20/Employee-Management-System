const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require('./src/page-template');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");


const prompt = inquirer.createPromptModule();
const crewMembers = [];

const managerPrompts = [
    {
        message: 'Manager\'s name?',
        name: 'name',
    },
    {
        message: 'Manager\'s id?',
        name: 'id',
    },
    {
        message: 'Manager\'s email?',
        name: 'email',
    },
    {
        message: 'Manager\'s Office Number?',
        name: 'officeNumber',
    },
];

const engineerPrompts = [
    {
        message: 'Engineer\'s name?',
        name: 'name',
    },
    {
        message: 'Engineer\'s id?',
        name: 'id',
    },
    {
        message: 'Engineer\'s email?',
        name: 'email',
    },
    {
        message: 'Engineer\'s GitHub?',
        name: 'gitHub',
    },
];

const internPrompts = [
    {
        message: 'Intern\'s name?',
        name: 'name',
    },
    {
        message: 'Intern\'s id?',
        name: 'id',
    },
    {
        message: 'Intern\'s email?',
        name: 'email',
    },
    {
        message: 'Intern\'s school?',
        name: 'school',
    },
];

prompt(managerPrompts)
    .then((info) => {
        const manager = new Manager(info.name, info.id, info.email, info.officeNumber);
        crewMembers.push(manager);
})
.then(() => {
    return prompt({
        message: "WOULD YOU LIKE TO ADD ANOTHER MEMBER TO THE CREW?",
        type: "confirm",
        name: "addMember",
    })
})
.then(({ addMember }) => {
    if (addMember) {
        console.log("YOU GOT IT DUDE!");
    } else {
        console.log("Write it up");
    }
})
.then(() => {
    return prompt({
        type: "rawlist",
        message: "What employee position would you like to add to the crew?",
        choices: [
            "Manager", 
            "Engineer", 
            "Intern",
        ],
        name: "type"
    })
})
.then(({ type }) => {
    switch(type) {
        case "Manager": {
            return prompt(managerPrompts);
        }
        case "Engineer": {
            return prompt(engineerPrompts);
        }
        case "Intern": {
            return prompt(internPrompts);
        }
    }
})
.then((employee) => {
    console.log(employee);
});

