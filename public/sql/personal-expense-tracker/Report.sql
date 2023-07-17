CREATE TABLE report (
    report_id BIGSERIAL NOT NULL PRIMARY KEY,
    report_desc VARCHAR(250) NOT NULL,
    report_type VARCHAR(50) NOT NULL,
    date_generated date NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO 
report (report_desc, report_type, date_generated)
VALUES
('First Report', 'Monthly', DEFAULT);