CREATE USER 'postman_dev'@'localhost' IDENTIFIED BY '******';

GRANT ALL PRIVILEGES  ON postman_dev. * TO 'postman_dev' @'localhost';

REVOKE ALL PRIVILEGES ON * . * FROM 'postman_dev'@'localhost';

FLUSH PRIVILEGES;