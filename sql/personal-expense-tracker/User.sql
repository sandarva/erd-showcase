CREATE TABLE expense_user(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(150) NOT NULL UNIQUE,
    user_password VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    date_joined date NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO
expense_user(username, user_password, email, date_joined) 
VALUES
('Lolem', '1qa234567ygdsxcfvbjasf', 'lolem@gmail.com', DEFAULT);