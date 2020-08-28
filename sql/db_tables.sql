/* Create new user that uses old password method */
CREATE USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

/* Grand priviledges only to the new table you are going to use for the application */
GRANT ALL PRIVILEGES ON meetsoccer.* TO 'foo'@'localhost';

/* Create new users table */
create table users (id int auto_increment primary key, Username varchar(40), Fullname varchar(40), password varchar(120));

/* Insert new value so we can test the methods */
insert into users(Username, Fullname, password) values('paul.pogba', 'Paul Pogba', 'poggol33');


/* ===============================================================================================================================

/* Create new games table */
create table games (id int auto_increment primary key, Place varchar(120), Address varchar(120), Mode varchar(40), Players int, DateTime datetime);

/* Insert new value so we can test the methods */
insert into games (Place, Address, Mode, Players, DateTime) values('Pegaso Sports', '177 NE 21st St, Miami, FL 33137', '5vs5', 7, '2020-08-27+18:30');

/* Insert new value so we can test the methods */
insert into games (Place, Address, Mode, Players, DateTime) values('Down Town Soccer', '444 NW 5th ST', '6vs6', 10, '2020-08-27+18:30');
