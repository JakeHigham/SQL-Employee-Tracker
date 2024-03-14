const db = require('../config/connection.js');

// Function to retrieve role options for prompts
async function retrieveRole() {
    try {
        const [rows] = await db.promise().query(`SELECT * FROM role`);
        const roleList = rows.map(data => ({
            name: data.title,
            value: data.id
        }));
        return roleList;
    } catch (err) {
        console.error('Error retrieving roles:', err);
        return []; // Return an empty array if an error occurs
    }
}

module.exports = retrieveRole;
