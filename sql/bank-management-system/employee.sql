CREATE TABLE employee(
    employee_id BIGSERIAL NOT NULL PRIMARY KEY,
    employee_name VARCHAR(150) NOT NULL,
    salary BIGINT NOT NULL,
    department VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    contact VARCHAR(10) NOT NULL UNIQUE,
    branch_id BIGINT NOT NULL REFERENCES branch(branch_id)
);

INSERT INTO
employee(employee_name, salary, department, address, contact, branch_id)
VALUES
('Narendra Modi', 15000, 'CSD', 'Birgunj', '9809873421', 102);
INSERT INTO
employee(employee_name, salary, department, address, contact, branch_id)
VALUES
('Putin', 27000, 'Loan', 'Moscow', '9809872421', 102);
INSERT INTO
employee(employee_name, salary, department, address, contact, branch_id)
VALUES
('Jung Bahadur', 15000, 'CSD', 'Palpa', '9209873421', 100);
INSERT INTO
employee(employee_name, salary, department, address, contact, branch_id)
VALUES
('Chandra Shumsher', 27000, 'Loan', 'Kathmandu', '9819873421', 101);
INSERT INTO
employee(employee_name, salary, department, address, contact, branch_id)
VALUES
('Juddha Sumsher', 15000, 'CSD', 'Kathmandu', '9809836421', 101);