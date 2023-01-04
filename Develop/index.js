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
            message: "Employees office number?",
            name: "officeNumber",
        },
        {
            type: "input",
            message: "Employee GitHub account?",
            name: "ID",
        },
        {
            type: "confirm",
            message: "Do you want to add anymore Employees to the team?",
            name: "add",
            if (answer = false) {
                return answer
            } else {
                addEmployee()
            }
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