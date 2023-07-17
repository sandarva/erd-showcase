CREATE TABLE categories (
    category_id BIGSERIAL NOT NULL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
categories(category_name)
VALUES ('Food & Drinks');
INSERT INTO
categories(category_name)
VALUES ('Fashion');
INSERT INTO
categories(category_name)
VALUES ('Education');
INSERT INTO
categories(category_name)
VALUES ('Vehicle');
INSERT INTO
categories(category_name)
VALUES ('Health');
INSERT INTO
categories(category_name)
VALUES ('Investment');
INSERT INTO
categories(category_name)
VALUES ('Lending');
INSERT INTO
categories(category_name)
VALUES ('Allowance');
INSERT INTO
categories(category_name)
VALUES ('Others');