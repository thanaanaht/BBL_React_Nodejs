const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const EducationMilk1103 = express.Router();
const dbConfig = require('./dbConfig');

// Create MySQL connection pool
const db = mysql.createPool(dbConfig);

// Middleware to handle database connections
EducationMilk1103.use((req, res, next) => {
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
EducationMilk1103.use(bodyParser.json());

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

// Define the POST route for inserting data
EducationMilk1103.post('/EducationMilk1103', async (req, res) => {
    try {
        const { username, year } = req.body;
        const sql = "INSERT INTO educationmilk1103 (username, year) VALUES (?, ?)";
        const result = await dbQueryPromise(sql, [username, year]);
        res.status(201).json({
            success: true,
            message: 'Value inserted successfully',
            insertedId: result.insertId,
        });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
        EducationMilk1103.put('/EducationMilk1103user', (req, res) => {
            const { username, year } = req.body;
            const sql = "UPDATE educationmilk1103 SET username = ? WHERE year = ?";
            db.query(sql, [username, year], (err, result) => {
                if (err) {
                    console.error("Error updating username:", err);
                    res.status(500).json({ error: "An error occurred while updating username" });
                } else {
                    console.log("Username updated successfully");
                    res.status(200).json({ message: "Username updated successfully" });
                }
            });
        });
});

// Define the GET route for fetching data by username and year
EducationMilk1103.get('/EducationMilk1103user', (req, res) => {
    const { username, year } = req.query;
    const sql = "SELECT * FROM educationmilk1103 WHERE username = ? AND year = ?";
    req.dbConnection.query(sql, [username, year], (err, result) => {
        if (err) {
            console.error('Error querying educationmilk1103:', err);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        } else {
            res.send(result);
        }
    });
});

// Define the PUT route for updating data by username and year
EducationMilk1103.put('/EducationMilk1103user', (req, res) => {
    const { username, year } = req.body;
    const sql = "UPDATE educationmilk1103 SET username = ? WHERE year = ?";
    db.query(sql, [username, year], (err, result) => {
        if (err) {
            console.error("Error updating username:", err);
            res.status(500).json({ error: "An error occurred while updating username" });
        } else {
            console.log("Username updated successfully");
            res.status(200).json({ message: "Username updated successfully" });
        }
    });
});

// Define the GET route for fetching all data
EducationMilk1103.get('/EducationMilk1103', (req, res) => {
    req.dbConnection.query("SELECT * FROM educationmilk1103", (err, result) => {
        if (err) {
            console.error('Error querying educationmilk1103:', err);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        } else {
            res.send(result);
        }
    });
});

// Middleware to release database connection
EducationMilk1103.use((req, res, next) => {
    req.dbConnection.release();
    next();
});

module.exports = EducationMilk1103;
