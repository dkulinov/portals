CREATE DATABASE portals;
USE portals;

CREATE TABLE support
(
    link VARCHAR(100) NOT NULL,
    link_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(link)
);

CREATE TABLE finance
(
    link VARCHAR(100) NOT NULL,
    link_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(link)
);

CREATE TABLE sales
(
    link VARCHAR(100) NOT NULL,
    link_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(link)
);

CREATE TABLE hr
(
    link VARCHAR(100) NOT NULL,
    link_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(link)
);

CREATE TABLE technology
(
    link VARCHAR(100) NOT NULL,
    link_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(link)
);