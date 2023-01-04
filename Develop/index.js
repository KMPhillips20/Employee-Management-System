const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const jobManager = () => {
    return inquirer.prompt([
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


const writeFile = data => {
    fs.writeFile("newHTML.html", data, err => {
        if(err) {
            console.log(invaled );
        } else {
            console.log("Get to know your teammates")
        }
    })
};

questions()
.then(answers => {
    return generateHTML(answers);
})
.then(data => {
    return writeFile(data);
});