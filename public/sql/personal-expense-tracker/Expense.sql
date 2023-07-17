CREATE TABLE expense (
    expense_id BIGSERIAL NOT NULL PRIMARY KEY,
    expense_title VARCHAR(200) NOT NULL,
    expense_amount INT NOT NULL,
    expense_description VARCHAR(250),
    expense_date date NOT NULL DEFAULT CURRENT_DATE,
    account_id BIGINT NOT NULL REFERENCES account(account_id),
    category_id BIGINT NOT NULL REFERENCES categories(category_id),
    sub_category_id BIGINT REFERENCES sub_categories(sub_category_id)
);

INSERT INTO
expense(expense_title, expense_amount, expense_description, expense_date, account_id, category_id, sub_category_id)
VALUES
('Cafe', 400, 'Coffee', DEFAULT, 1, 1, 1);