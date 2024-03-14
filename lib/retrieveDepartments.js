const db = require('../config/connection.js');

// Function to retrieve department options for prompts
async function retrieveDepartments() {
    try {
        const [rows] = await db.promise().query(`SELECT * FROM department`);
        const departmentList = rows.map(data => ({
            name: data.name,
            value: data.id
        }));
        return departmentList;
    } catch (err) {
        console.error('Error retrieving departments:', err);
        return []; // Return an empty array if an error occurs
    }
}

module.exports = retrieveDepartments;
