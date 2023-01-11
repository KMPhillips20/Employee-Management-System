const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require('./src/page-template');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



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

const pickEmployeePosition = async ({ type }) => {
    let response;
    switch(type) {
        case "Manager": {
         const response = await prompt(managerPrompts);
         const { name, id, email, officeNumber } = response;
         const manager = new Manager( name, id, email, officeNumber);
         crewMembers.push(manager);
         break;
        }
        case "Engineer": {
         const response = await prompt(engineerPrompts);
         const { name, id, email, gitHub } = response;
         const engineer = new Engineer(name, id, email, gitHub );
         crewMembers.push(engineer);
         break;
        }
        case "Intern": {
         const response = await prompt(internPrompts);
         const { name, id, email, school } = response;
         const intern = new Intern(name, id, email, school );
         crewMembers.push(intern);
         break;
        }
    }
};

const confirmMoreCrewMembers = () => {
        return prompt({
            message: "WOULD YOU LIKE TO ADD ANOTHER MEMBER TO THE CREW?",
            type: "confirm",
            name: "addMember",
        })
};

const addMoreCrewMembers = ({ addMember }) => {
    if (addMember) {
        console.log("YOU GOT IT DUDE!");
    } else {
        const template = pageTemplate(crewMembers);
        fs.writeFileSync("./dist/team.html",template);
    }   
};

prompt(managerPrompts)
    .then((name, id, email, officeNumber) => {
        const manager = new Manager(name, id, email, officeNumber);
        crewMembers.push(manager);
})
.then(confirmMoreCrewMembers)
.then(addMoreCrewMembers)
.then(() => {
    return prompt({
        type: "list",
        message: "What employee position would you like to add to the crew?",
        choices: [
            "Manager", 
            "Engineer", 
            "Intern",
        ],
        name: "type"
    })
})
.then(pickEmployeePosition)
.then(confirmMoreCrewMembers)
.then(addMoreCrewMembers)

