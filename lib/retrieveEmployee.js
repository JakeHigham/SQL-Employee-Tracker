const db = require('../config/connection.js');

// Function to retrieve employee options for prompts
async function retrieveEmployee() {
    try {
        const [rows] = await db.promise().query(`SELECT * FROM employee`);
        const employeeList = rows.map(data => ({
            name: `${data.first_name} ${data.last_name}`,
            value: data.id
        }));
        // Add a default "NONE" option at the end of the employee list
        employeeList.push({ name: 'NONE', value: 0 });
        return employeeList;
    } catch (err) {
        console.error('Error retrieving employees:', err);
        return []; // Return an empty array if an error occurs
    }
}

module.exports = retrieveEmployee;
