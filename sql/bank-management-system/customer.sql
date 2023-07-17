CREATE TABLE customer(
    customer_id BIGSERIAL NOT NULL PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    age BIGINT NOT NULL,
    address VARCHAR(200) NOT NULL,
    contact VARCHAR(10) NOT NULL UNIQUE,
    gender VARCHAR(15) NOT NULL,
    nationality VARCHAR(150) NOT NULL DEFAULT 'Nepali'
);

INSERT INTO 
customer(customer_name, email, age, address, contact, gender, nationality)
VALUES
('Ram Bahadur', 'ram@abc.com', 21, 'Kathmandu', '9809890987', 'Male', DEFAULT);
INSERT INTO 
customer(customer_name, email, age, address, contact, gender, nationality)
VALUES
('Hari Bahadur', 'hari@google.com', 21, 'Pokhara', '9876787656', 'Male', 'French');
INSERT INTO 
customer(customer_name, email, age, address, contact, gender, nationality)
VALUES
('Sita Kumari', 'sita@bajra.com', 21, 'Birtamod', '9898765675', 'Female', DEFAULT);
INSERT INTO 
customer(customer_name, email, age, address, contact, gender, nationality)
VALUES
('KP Oli', 'sedlyf@xyz.com', 21, 'Birgunj', '9800009876', 'Male', DEFAULT);
INSERT INTO 
customer(customer_name, email, age, address, contact, gender, nationality)
VALUES
('Prachanda', 'murra@pqa.com', 21, 'Ramechap', '9898767680', 'Male', 'Swiss');
INSERT INTO 
customer(customer_name, email, age, address, contact, gender, nationality)
VALUES
('Sher Bahadur', 'shere@lol.com', 21, 'Patan', '9809867564', 'Male', DEFAULT);