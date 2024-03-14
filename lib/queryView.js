const db = require('../config/connection.js');

// Function for viewing all departments
function viewDepartments() {
    db.query(
        `SELECT id AS department_id, name AS department_name FROM department`,
        (err, res) => {
            if (err) {
                console.error('Error viewing departments:', err);
            } else {
                console.table(res);
            }
            handleNextTask();
        }
    );
}

// Function for viewing all roles
function viewRoles() {
    db.query(
        `SELECT role.id AS role_id, role.title AS job_title, department.name AS department, role.salary
        FROM role
        INNER JOIN department ON role.department_id = department.id`,
        (err, res) => {
            if (err) {
                console.error('Error viewing roles:', err);
            } else {
                console.table(res);
            }
            handleNextTask();
        }
    );
}

// Function for viewing all employees
function viewEmployees() {
    db.query(
        `SELECT employee.id AS employee_id, employee.first_name, employee.last_name,
        role.title AS job_title, department.name AS department, role.salary AS salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`,
        (err, res) => {
            if (err) {
                console.error('Error viewing employees:', err);
            } else {
                console.table(res);
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

module.exports = { viewDepartments, viewRoles, viewEmployees };
