CREATE TABLE sub_categories (
    sub_category_id BIGSERIAL NOT NULL PRIMARY KEY,
    sub_category_name VARCHAR(100) NOT NULL UNIQUE,
    category_id BIGINT NOT NULL REFERENCES categories(category_id)
);

INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Eating Out', 1);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Beverages', 1);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Clothing', 2);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Apparel', 2);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('College Fee', 3);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Parking', 4);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Medicine', 5);
INSERT INTO
sub_categories(sub_category_name, category_id)
VALUES
('Deposit', 6);