SET NAMES UTF8;
DROP DATABASE IF EXISTS yd;
CREATE DATABASE yd CHARSET=UTF8;
USE yd;
CREATE TABLE yd_user(
    uname VARCHAR(10) PRIMARY KEY,
    upwd  VARCHAR(16),
    email VARCHAR(64),
    phone VARCHAR(64)
)

