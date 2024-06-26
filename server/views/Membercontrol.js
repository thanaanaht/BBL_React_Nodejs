const express = require('express');
const Membercontrol = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const dbConfig = require('./dbConfig');
// Create MySQL connection pool
const db = mysql.createPool(dbConfig);

// Middleware to handle database connections
Membercontrol.use((req, res, next) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting database connection:', err);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        } else {
            req.dbConnection = connection;
            next();
        }
    });
});

// Middleware to parse JSON request bodies
Membercontrol.use(bodyParser.json());

// Route to retrieve all members
Membercontrol.get('/bblmember', (req, res) => {
    req.dbConnection.query("SELECT * FROM member", (err, result) => {
        if (err) {
            console.error('Error querying member:', err);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        } else {
            res.send(result);
        }
    });
});

// Function to execute SQL queries with promises
function dbQueryPromise(sql, values) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

// Route to create a new member
Membercontrol.post('/membercreate', async (req, res) => {
    try {
        const saltRounds = process.env.SALT_ROUNDS || 10; // default to 10 rounds if not provided
        // const password = req.body.password ;
        const { username, password , area, local, level } = req.body;
        const hashedpassword = await bcrypt.hash(password, parseInt(saltRounds));


        // SQL Query
        const sql = "INSERT INTO member (username, password, area, local, level) VALUES (?, ?, ?, ?, ?)";
        
        // Execute the query with parameters
        const result = await dbQueryPromise(sql, [
            username, hashedpassword, area, local, level,
        ]);
        console.log(username);
        console.log(password);
        console.log(hashedpassword);
        console.log(area);
        console.log(local);
        console.log(level);
        // Send success response
        res.status(201).json({
            success: true,
            message: 'Value inserted successfully',
            insertedid: result.insertId,
        });
    } catch (error) {
        // Handle errors
        console.error('Error inserting data:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});

// Middleware to release database connection
Membercontrol.use((req, res, next) => {
    req.dbConnection.release();
    next();
});

module.exports = Membercontrol;
