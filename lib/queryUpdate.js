// Function for updating an employee's role
async function updateEmployeeRole(response) {
    try {
        await db.promise().query(
            `UPDATE employee SET role_id = ? WHERE id = ?`,
            [response.updateRole, response.updateEmployee]
        );
        console.log('\u001b[36;1m', `Employee role updated!`);
        handleNextTask();
    } catch (err) {
        console.error('Error updating employee role:', err);
        handleNextTask();
    }
}
