-- Detail of ceratin customer
SELECT customer.customer_id, customer_name, account_number, account_type, balance, branch_name FROM
customer JOIN account JOIN branch
ON account.branch_id = branch.branch_id
ON customer.customer_id = account.customer_id
where customer_name = 'Ram Bahadur';

-- Detail of customers who have a balance of more than 10000
SELECT customer_name, account_number, balance, account_type, branch_name, location
FROM customer JOIN (account JOIN branch
ON account.branch_id = branch.branch_id)
ON customer.customer_id = account.customer_id
WHERE balance >= 10000;

-- Find number of accounts in each branch
SELECT branch_name, COUNT(account_id)
FROM account JOIN branch
ON branch.branch_id = account.branch_id
GROUP BY branch_name;

-- Find the total amount of money in each branch
SELECT branch_name, SUM(account.balance) AS total_balance
FROM account JOIN branch
ON account.branch_id = branch.branch_id
GROUP BY branch_name;

-- Find the total types of accounts opened
SELECT DISTINCT account_type
FROM account;

-- Find the number of each types of accounts opened
SELECT account_type, COUNT(account_number) as numbers
FROM account
GROUP BY account_type;

-- Find the number of each type of account in each branch
SELECT branch_name, account_type, COUNT(account_number) as numbers
FROM branch LEFT JOIN account
ON account.branch_id = branch.branch_id
GROUP BY branch_name, account_type
ORDER BY branch_name ASC;

-- Find the total balance of a customer
SELECT customer_name, SUM(balance) as total_amount
FROM customer JOIN account
ON customer.customer_id = account.customer_id
GROUP BY customer_name
ORDER BY total_amount DESC;

-- Find the amount each customer has in each branch
SELECT customer_name, branch_name, SUM(balance) as total_amount
FROM customer JOIN
(
    account JOIN branch
    ON account.branch_id = branch.branch_id
)
ON customer.customer_id = account.customer_id
GROUP BY customer_name, branch_name
ORDER BY customer_name;

-- Find the top three customers who has the highest balance in all branches
SELECT customer_name, SUM(account.balance) as total_amount
FROM customer JOIN account
ON customer.customer_id = account.customer_id
GROUP BY customer_name
ORDER BY total_amount DESC LIMIT 3;


