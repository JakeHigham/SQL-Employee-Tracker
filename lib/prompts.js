const retrieveDepartments = require('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retrieveEmployee = require('./retrieveEmployee');

// Define reusable validation function
const validateInput = (input) => {
  return input !== '' || 'Input cannot be blank';
};

// Inquirer prompts (run in 'selectTask')
const prompts = [
  // TASK
  {
    name: 'task',
    type: 'list',
    message: 'Select a task:',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'EXIT'
    ]
  },
  // Add a department
  {
    name: 'department',
    type: 'input',
    message: 'Enter the name of the new department:',
    when: (response) => response.task === 'Add a department',
    validate: validateInput
  },
  // Add a role
  {
    name: 'roleTitle',
    type: 'input',
    message: 'Enter the title of the new role:',
    when: (response) => response.task === 'Add a role',
    validate: validateInput
  },
  {
    name: 'roleSalary',
    type: 'input',
    message: 'Enter the salary for the new role:',
    when: (response) => response.task === 'Add a role',
    validate: (input) => !isNaN(input) || 'Salary must be a number'
  },
  {
    name: 'roleDepartment',
    type: 'list',
    message: 'Select the department for the new role:',
    choices: retrieveDepartments,
    when: (response) => response.task === 'Add a role'
  },
  // Add an employee
  {
    name: 'employeeFirstName',
    type: 'input',
    message: 'Enter the first name of the new employee:',
    when: (response) => response.task === 'Add an employee',
    validate: validateInput
  },
  {
    name: 'employeeLastName',
    type: 'input',
    message: 'Enter the last name of the new employee:',
    when: (response) => response.task === 'Add an employee',
    validate: validateInput
  },
  {
    name: 'employeeRole',
    type: 'list',
    message: 'Select the role for the new employee:',
    choices: retrieveRole,
    when: (response) => response.task === 'Add an employee'
  },
  {
    name: 'employeeManager',
    type: 'list',
    message: 'Select the manager for the new employee:',
    choices: retrieveEmployee,
    when: (response) => response.task === 'Add an employee'
  },
  // Update an employee role
  {
    name: 'updateEmployee',
    type: 'list',
    message: 'Select the employee to update:',
    choices: retrieveEmployee,
    when: (response) => response.task === 'Update an employee role'
  },
  {
    name: 'updateRole',
    type: 'list',
    message: 'Select the new role for the employee:',
    choices: retrieveRole,
    when: (response) => response.task === 'Update an employee role'
  }
];

module.exports = prompts;
