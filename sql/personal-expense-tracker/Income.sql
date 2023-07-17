CREATE TABLE income (
    income_id BIGSERIAL NOT NULL PRIMARY KEY,
    income_title VARCHAR(200) NOT NULL,
    income_amount INT NOT NULL,
    income_description VARCHAR(250),
    income_date date NOT NULL DEFAULT CURRENT_DATE,
    account_id BIGINT NOT NULL REFERENCES account(account_id), 
    category_id BIGINT NOT NULL REFERENCES categories(category_id),
    sub_category_id BIGINT REFERENCES sub_categories(sub_category_id)
);

INSERT INTO
income(
    income_title, 
    income_amount, 
    income_description, 
    income_date, account_id, category_id, sub_category_id
)
VALUES 
('Dad', 1500, 'For futsal', DEFAULT, 1, 8, null);

