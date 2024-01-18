CREATE TABLE IF NOT EXISTS company (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description LONGTEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(11) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    created_at DATETIME default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_company (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    company_id INT(11) NOT NULL,
    role ENUM('client', 'employé', 'administrateur'),
    CONSTRAINT fk_user_company_user
        FOREIGN KEY (user_id) REFERENCES user (id),
    CONSTRAINT fk_user_company_company
        FOREIGN KEY (company_id) REFERENCES company (id)
);