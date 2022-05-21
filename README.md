# E-Commerce-Backend
The challenge is to build the back end for an e-commerce site.


## Description
This app is the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries.
The SQL database includes tables for products, categories, tags, and product tags. RESTful API routes are used to make requests and updates from the database which are joined through Sequelize queries allowing the ability to "CRUD" the database. 


## Techno Used
- Node
- Express
- MySQL
- Sequelize
- Dotenv

## Walk-Through Video
Click [here](https://drive.google.com/file/d/1ywmUslBs8mo84UCGkH5r0CXjGAf8RFpn/view) for the full demo
![Sreenshot](./Screen%20Shot%202022-05-21%20at%2011.51.39%20AM.png)


## Installation
To get started clone this repository using 
<br>
```terminal
git@github.com:onlydeniros/e-commerce_backend.git
```
Both Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm init --y
``` 
```terminal
npm install express sequelize mysql2
```
Open up MySQL shell and input 
```terminal
source db/schema.sql
```

Then quit MySQL shell and input the following in your terminal
```terminal
npm run seed
```
to start running application simply input 
```terminal
npm start
```
Open up Insomnia core to GET, POST, PUT and DELETE from different routes.

## Questions
Please visit my **[GitHub profile](https://github.com/onlydeniros)** to check out this and other projects I've created and contributed to.
If you have any specific questions about this project, please contact me at <denirodumasdev@gmail.com>.