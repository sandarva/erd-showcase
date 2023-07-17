-- Selecting all
SELECT * FROM account;
SELECT * FROM income;
SELECT * FROM expense;
SELECT * FROM expense_user;
SELECT * FROM categories;
SELECT * FROM sub_categories;

-- Show all the sub-categories of all categories
SELECT category_name, sub_category_name
FROM categories LEFT JOIN sub_categories
ON categories.category_id = sub_categories.category_id
ORDER BY category_name;

-- Show all the sub-categories of category 'Food & Drinks'
SELECT sub_category_name
FROM categories JOIN sub_categories
ON categories.category_id = sub_categories.category_id
WHERE category_name = 'Food & Drinks';

-- Show all the accounts of all users
SELECT  expense_user.user_id, username, email, account_name, initial_balance, created_date FROM
expense_user LEFT JOIN account
ON expense_user.user_id = account.user_id;

-- Show all the accounts of a user
SELECT  expense_user.user_id, username, email, account_name, initial_balance, created_date FROM
expense_user JOIN account
ON expense_user.user_id = account.user_id
WHERE username = 'Lolem189';

-- Find the total expense of a user
SELECT username, SUM(expense_amount) as total_expenditure
FROM expense_user LEFT JOIN (account JOIN expense ON account.account_id = expense.account_id)
ON account.user_id = expense_user.user_id
GROUP BY username;

-- Show how much on what categories a user has spent on
SELECT username, category_name, SUM(expense_amount) as total_expenditure
FROM expense_user 
LEFT JOIN (account LEFT JOIN 
    (
        categories LEFT JOIN expense
        ON expense.category_id = categories.category_id
    ) 
    ON account.account_id = expense.account_id
)
ON account.user_id = expense_user.user_id
WHERE username = 'Lolem'
GROUP BY username, category_name;

-- Add a columns type in categories
-- ALTER TABLE categories
-- ADD COLUMN category_type VARCHAR(8) DEFAULT 'Expense';

-- Update the allowance category type to income
-- UPDATE categories
-- SET category_type = 'Income'
-- WHERE category_name = 'Allowance';