CREATE TABLE IF NOT EXISTS user (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    role ENUM('client', 'owner') NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS category (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description longtext,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS company (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description LONGTEXT,
    address VARCHAR(255) NOT NULL,
    working_days JSON NOT NULL,
    category_id INT(11) NOT NULL,
    working_hour_start_morning_monday TIME,
    working_hour_end_morning_monday TIME,
    working_hour_start_afternoon_monday TIME,
    working_hour_end_afternoon_monday TIME, 
    working_hour_start_morning_tuesday TIME,
    working_hour_end_morning_tuesday TIME,
    working_hour_start_afternoon_tuesday TIME,
    working_hour_end_afternoon_tuesday TIME,
    working_hour_start_morning_wednesday TIME,
    working_hour_end_morning_wednesday TIME,
    working_hour_start_afternoon_wednesday TIME,
    working_hour_end_afternoon_wednesday TIME,
    working_hour_start_morning_thursday TIME,
    working_hour_end_morning_thursday TIME,
    working_hour_start_afternoon_thursday TIME,
    working_hour_end_afternoon_thursday TIME,
    working_hour_start_morning_friday TIME,
    working_hour_end_morning_friday TIME,
    working_hour_start_afternoon_friday TIME,
    working_hour_end_afternoon_friday TIME,
    working_hour_start_morning_saturday TIME,
    working_hour_end_morning_saturday TIME,
    working_hour_start_afternoon_saturday TIME,
    working_hour_end_afternoon_saturday TIME,        
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_company_category
        FOREIGN key (category_id) REFERENCES category (id)
);

CREATE TABLE IF NOT EXISTS user_company (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    company_id INT(11) NOT NULL,
    role ENUM('client', 'employee', 'administrator'),
    CONSTRAINT fk_user_company_user
        FOREIGN KEY (user_id) REFERENCES user (id),
    CONSTRAINT fk_user_company_company
        FOREIGN KEY (company_id) REFERENCES company (id)
);

INSERT INTO category (id, name, description) VALUES
(1, "Coiffeur", NULL),
(2, "Barbier", NULL),
(3, "Manucure", NULL),
(4, "Institut de beauté", NULL),
(5, "Spa", NULL);