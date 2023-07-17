-- DROP SEQUENCE branch_id_seq;
CREATE SEQUENCE branch_id_seq START 100;

-- CREATE TABLE branch(
--     branch_id BIGSERIAL NOT NULL PRIMARY KEY,
--     branch_name VARCHAR(100) NOT NULL UNIQUE,
--     number_of_staffs BIGINT NOT NULL,
--     location VARCHAR(200) NOT NULL,
--     contact VARCHAR(10) NOT NULL UNIQUE
-- );

-- ALTER TABLE branch
-- ALTER COLUMN branch_id DROP DEFAULT;

-- ALTER TABLE branch
-- ALTER COLUMN branch_id SET DEFAULT nextval('branch_id_seq');

INSERT INTO 
branch(branch_name, number_of_staffs, location, contact)
VALUES
('Naxal', 1, 'Kathmandu', '01-5543234');

INSERT INTO 
branch(branch_name, number_of_staffs, location, contact)
VALUES
('Budhanilkantha', 2, 'Kathmandu', '01-5543235');

INSERT INTO 
branch(branch_name, number_of_staffs, location, contact)
VALUES
('Balwatar', 2, 'Kathmandu', '01-5543236');