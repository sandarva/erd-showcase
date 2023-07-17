CREATE TABLE account_transaction(
    transaction_id BIGSERIAL NOT NULL PRIMARY KEY,
    transaction_amount INT NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    transaction_description TEXT,
    transaction_date DATE NOT NULL DEFAULT CURRENT_DATE,
    account_id BIGINT NOT NULL REFERENCES account(account_id)
);

INSERT INTO 
account_transaction(transaction_amount, transaction_type, transaction_description, transaction_date, account_id)
VALUES
('500000', 'Deposit', 'Make Road', date '2022-02-07', 3);