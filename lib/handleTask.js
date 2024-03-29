const { viewDepartments, viewRoles, viewEmployees } = require('./queryView.js');
const { addDepartment, addRole, addEmployee } = require('./queryAdd.js');
const updateEmployeeRole = require('./queryUpdate.js');

// function to direct task choice to specific query function
function handleTask(response) {
    switch (response.task) {
        case "View all departments":
            viewDepartments();
            break;
        case "View all roles":
            viewRoles();
            break;
        case "View all employees":
            viewEmployees();
            break;
        case "Add a department":
            addDepartment(response);
            break;
        case "Add a role":
            addRole(response);
            break;
        case "Add an employee":
            addEmployee(response);
            break;
        case "Update an employee role":
            updateEmployeeRole(response);
            break;
        case "EXIT":
            console.log("Exiting...");
            process.exit(0);
    }
}

module.exports = handleTask;
