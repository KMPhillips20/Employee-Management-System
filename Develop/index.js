const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/page-template');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
            validate: Position => {
                if (Position) {
                    return true;
                } else {
                    console.log("Must enter Employee name.");
                    return false; 
                }
            }
        },
        {
            type: "input",
            message: "email?",
            name: "email",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Must enter Employee email.");
                    return false; 
                }
            }
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "id",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Must enter Employee ID.");
                    return false; 
                }
            }
        },
        {
            type: "input",
            message: "Managers office number?",
            name: "officeNumber",
            when: (officeNumber) => officeNumber.role === "Manager",
            validate: officeNumber => {
                if (officeNumber) {
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
            name: "gitHub",
            when: (gitHub) => gitHub.role === "Engineer",
            validate: gitHub => {
                if (gitHub) {
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
            name: "school",
            when: (school) => school.role === "Intern",
            validate: school=> {
                if (school) {
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

return inquirer.prompt()
    .then(employeeData => {
        let { position, name, email, id, officeNumber, gitHub, school} = employeeData;
        let employee;
        if (position === "Manager") {
            employee = new Manager(name, email, id, officeNumber)
        }
        if (position === "Engineer") {
            employee = new Engineer(name, email, id, gitHub)
        }
        if (position === "Intern") {
            employee = new Intern(name, email, id, school)
        }
    });



const writeFile = data => {
    fs.writeFile("new.html", data, err => {
        if (err) {
            console.log(err);
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