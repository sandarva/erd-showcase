CREATE SEQUENCE account_number_seq START 1000000000001;

CREATE TABLE account(
    account_id BIGSERIAL NOT NULL PRIMARY KEY,
    account_number BIGINT NOT NULL UNIQUE DEFAULT nextval('account_number_seq'),
    balance INT NOT NULL DEFAULT 0,
    account_type VARCHAR(50) NOT NULL DEFAULT 'Savings',
    debit_card BOOLEAN NOT NULL DEFAULT TRUE,
    credit_card BOOLEAN NOT NULL DEFAULT FALSE,
    cheque BOOLEAN NOT NULL DEFAULT TRUE,
    mobile_banking BOOLEAN NOT NULL DEFAULT TRUE,
    customer_id BIGINT NOT NULL REFERENCES CUSTOMER(customer_id),
    branch_id BIGINT NOT NULL REFERENCES BRANCH(branch_id) 
);

INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(5000, 'Savings', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1, 100);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(15000, 'Fixed', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1, 100);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(5000000, 'Savings', DEFAULT, TRUE, DEFAULT, DEFAULT, 4, 101);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(1500000000, 'Recurring', DEFAULT, TRUE, DEFAULT, DEFAULT, 4, 102);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(30000000, 'Fixed', DEFAULT, TRUE, DEFAULT, DEFAULT, 4, 102);

INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(5000, 'Savings', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2, 102);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(5000, 'Savings', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 3, 102);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(5000, 'Savings', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 4, 101);
INSERT INTO 
account(balance, account_type, debit_card, credit_card, cheque, mobile_banking, customer_id, branch_id)
VALUES
(100000, 'Savings', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 6, 102);