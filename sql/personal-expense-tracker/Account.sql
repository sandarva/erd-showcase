CREATE TABLE account (
    account_id BIGSERIAL NOT NULL PRIMARY KEY,
    account_name VARCHAR(100) NOT NULL,
    initial_balance INT NOT NULL,
    created_date date NOT NULL DEFAULT CURRENT_DATE,
    user_id BIGINT NOT NULL REFERENCES expense_user(user_id)
);

INSERT INTO 
account (account_name, initial_balance, created_date, user_id)
VALUES
('Cash', 2000, DEFAULT, 1);

INSERT INTO 
account (account_name, initial_balance, created_date, user_id)
VALUES
('NIC Asia', 10000, DEFAULT, 1);