# Todo List using Node.js with MySQL

To begin:

Install the dependecies using the command `npm install`

Then you will need to create database and table for execution the aplication, using the code below:

##### DATABASE
~~~~sql
CREATE DATABASE `todo-app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
~~~~

##### TABLE
~~~~sql
CREATE TABLE todo-app.`todos` (
  `id_todo` int NOT NULL AUTO_INCREMENT,
  `todo_text` varchar(255) NOT NULL,
  `todo_active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_todo`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
~~~~

##### To start the application, run the command `npm run dev`
