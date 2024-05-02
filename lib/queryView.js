const db = require('../config/connection.js'); // Import the db variable

// Function for viewing all departments
async function viewDepartments() {
    try {
        const [rows] = await db.query(`SELECT id AS department_id, name AS department_name FROM department`);
        console.table(rows);
        handleNextTask();
    } catch (err) {
        console.error('Error viewing departments:', err);
        handleNextTask();
    }
}

// Function for viewing all roles
async function viewRoles() {
    try {
        const [rows] = await db.query(`SELECT role.id AS role_id, role.title AS job_title, department.name AS department, role.salary FROM role INNER JOIN department ON role.department_id = department.id`);
        console.table(rows);
        handleNextTask();
    } catch (err) {
        console.error('Error viewing roles:', err);
        handleNextTask();
    }
}

// Function for viewing all employees
async function viewEmployees() {
    try {
        const [rows] = await db.query(`SELECT employee.id AS employee_id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id`);
        console.table(rows);
        handleNextTask();
    } catch (err) {
        console.error('Error viewing employees:', err);
        handleNextTask();
    }
}

// Function to handle redirection to the next task
function handleNextTask() {
    const selectTask = require('./selectTask.js');
    selectTask();
}

module.exports = { viewDepartments, viewRoles, viewEmployees };
