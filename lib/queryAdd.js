const db = require('../config/connection.js');

// Functions for all ***ADD*** SQL queries

function addDepartment(response) {
    db.query(
        `INSERT INTO department (name) VALUES (?)`,
        [response.department],
        (err, res) => {
            if (err) {
                console.error('Error adding department:', err);
            } else {
                console.log('\u001b[36;1m', `${response.department} department added!`);
            }
            handleNextTask();
        }
    );
}

function addRole(response) {
    db.query(
        `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
        [response.roleTitle, response.roleSalary, response.roleDepartment],
        (err, res) => {
            if (err) {
                console.error('Error adding role:', err);
            } else {
                console.log('\u001b[36;1m', `${response.roleTitle} role added!`);
            }
            handleNextTask();
        }
    );
}

function addEmployee(response) {
    db.query(
        `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
        [response.employeeFirstName, response.employeeLastName, response.employeeRole, response.employeeManager],
        (err, res) => {
            if (err) {
                console.error('Error adding employee:', err);
            } else {
                console.log('\u001b[36;1m', `Employee ${response.employeeFirstName} ${response.employeeLastName} added!`);
            }
            handleNextTask();
        }
    );
}

// Function to handle redirection to the next task
function handleNextTask() {
    const selectTask = require('./selectTask.js');
    selectTask();
}

module.exports = { addDepartment, addRole, addEmployee };
