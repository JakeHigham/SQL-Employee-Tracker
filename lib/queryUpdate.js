const db = require('../config/connection.js');

// Function for updating an employee's role
function updateEmployeeRole(response) {
    db.query(
        `UPDATE employee SET role_id = ? WHERE id = ?`,
        [response.updateRole, response.updateEmployee],
        (err, res) => {
            if (err) {
                console.error('Error updating employee role:', err);
            } else {
                console.log('\u001b[36;1m', `Employee role updated!`);
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

module.exports = updateEmployeeRole;
