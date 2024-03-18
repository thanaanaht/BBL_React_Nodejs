const express = require('express');
const Education1101control = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');


const dbConfig = require('./dbConfig');
// Create MySQL connection pool
const db = mysql.createPool(dbConfig);

// Middleware to handle database connections
Education1101control.use((req, res, next) => {
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
Education1101control.use(bodyParser.json());

Education1101control.delete('/Memberdelete/:id', (req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM member WHERE id = ?", id, (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);   
        }
    })
})

Education1101control.get('/education1101', (req, res) => {
    req.dbConnection.query("SELECT * FROM education1101", (err, result) => {
        if (err) {
            console.error('Error querying education1101:', err);
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
Education1101control.post('/education1101', async (req, res) => {
    try {
  // [{"id":1,"Username":"local01","Term":"1","Year":2566,"Location_user":"local01","AREA":"area01",
  // "K1_Tuition_Fee":99.5,"K1_Book_Fee":99.5,"K1_Tool_Fee":99.5,"K1_Uniform_Fee":99.5,"K1_Activity_Fee":99.5,"K1_Tuition_Number":100,
  // "K1_Book_Number":100,"K1_Tool_Number":100,"K1_Uniform_Number":100,"K1_Activity_Number":100,"STATUS":"pre-approve"}]
      const {
        Username, Term, Year, Location_user, AREA, K1_Tuition_Fee, K1_Book_Fee,
        K1_Tool_Fee, K1_Uniform_Fee, K1_Activity_Fee, K1_Tuition_Number, K1_Book_Number, K1_Tool_Number, K1_Uniform_Number,
        K1_Activity_Number, STATUS, 
      } = req.body;
  
      // SQL Query
      const sql = "INSERT INTO education1101 (Username, Term, Year, Location_user, AREA, K1_Tuition_Fee, K1_Book_Fee, K1_Tool_Fee, K1_Uniform_Fee, K1_Activity_Fee, K1_Tuition_Number, K1_Book_Number, K1_Tool_Number, K1_Uniform_Number,K1_Activity_Number, STATUS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
    //   INSERT INTO `education1101`(`id`, `Username`, `Term`, `Year`, `Location_user`, `AREA`, `K1_Tuition_Fee`, `K1_Book_Fee`, `K1_Tool_Fee`, `K1_Uniform_Fee`, `K1_Activity_Fee`, `K1_Tuition_Number`, `K1_Book_Number`, `K1_Tool_Number`, `K1_Uniform_Number`, `K1_Activity_Number`, `STATUS`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]','[value-12]','[value-13]','[value-14]','[value-15]','[value-16]','[value-17]')
      // Execute the query with parameters
      const result = await dbQueryPromise(sql, [
        Username, Term, Year, Location_user, AREA, K1_Tuition_Fee, K1_Book_Fee,
        K1_Tool_Fee, K1_Uniform_Fee, K1_Activity_Fee, K1_Tuition_Number, K1_Book_Number, K1_Tool_Number, K1_Uniform_Number,
        K1_Activity_Number, STATUS, 
      ]);
  
      // Send success response
      res.status(201).json({
        success: true,
        message: 'Value inserted successfully',
        insertedId: result.insertId,
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
Education1101control.use((req, res, next) => {
    req.dbConnection.release();
    next();
});

module.exports = Education1101control;
