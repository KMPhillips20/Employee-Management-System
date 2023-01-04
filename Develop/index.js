const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "What is your position?",
            name: "position",
            choices: ["Manager", "Engineer", "Intern"],
            
        },
        {
            type: "input",
            message: "Employee name?",
            name: "name",
        },
        {
            type: "input",
            message: "Employee email?",
            name: "email",
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "Managers office number?",
            name: "officePhoneNumber",
            when:(officePhoneNumber) => officePhoneNumber.role === "Manager",
            validate: officePhoneNumber => {
                if (officePhoneNumber) {
                    return true;
                } else {
                    console.log("Must enter Managers Office Number.");
                    return false; 
                }
            }
        },
        {
            type: "input",
            message: "Employee GitHub account?",
            name: "gitHubAccount",
            when:(gitHubAccount) => gitHubAccount.role === "Engineer",
            validate: gitHubAccount => {
                if (gitHubAccount) {
                    return true;
                } else {
                    console.log("Must enter Engineer Git Hub Account.");
                    return false; 
                }
            }
        },
        {
            type: "input",
            message: "What school or college do you attend?",
            name: "educationBackground",
            when:(educationBackground) => educationBackground.role === "Intern",
            validate: educationBackground=> {
                if (educationBackground) {
                    return true;
                } else {
                    console.log("Must enter your Education Background.");
                    return false; 
                }
            }
        },
        {
            type: "confirm",
            message: "Do you want to add anymore team members to your company?",
            name: "add",
            default: false,
        }
        
    ]);
};




const writeFile = data => {
    fs.writeFile("newHTML.html", data, err => {
        if (err) {
            console.log(invaled );
        } else {
            console.log("Get to know your teammates")
        }
    })
};

addEmployee()
.then(answers => {
    return generateHTML(answers);
})
.then(data => {
    return writeFile(data);
});