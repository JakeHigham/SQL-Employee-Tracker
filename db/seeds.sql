INSERT INTO department (name)
VALUES 
('Production'), 
('Operations'), 
('Legal'), 
('Information Technology'), 
('Management'), 
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Developer', 100000, 1), 
('OPS Manager', 90000, 2), 
('Paralegal', 40000, 3), 
('IT Support', 70000, 4), 
('Project Lead', 90000, 5), 
('Salesperson', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Pablo', 'Sandoval', 1, 5),
('Brandon', 'Crawford', 2, 5),
('Buster', 'Posey', 3, 5),
('JD', 'Davis', 4, 5),
('Matt', 'Chapman', 5, NULL),
('Patrick', 'Bailey', 6, 9),
('Madison', 'Bumgarner', 1, 9),
('Logan', 'Webb', 2, 9),
('Taylor', 'Rogers', 5, NULL);