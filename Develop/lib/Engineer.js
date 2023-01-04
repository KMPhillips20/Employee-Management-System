const Employee = require("./Employee");

class Engineer extends Employee {
    
};

return Employee.prompt([
        {
            type: "input",
            message: "Id",
            message: "What is your E-mail?",
            message: "What is Your GitHub?",
            name: "Engineer"
        }
]);

module.exports = Engineer;
