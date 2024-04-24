const mysql = require("mysql2");
require("dotenv").config();

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to database with ID: " + db.threadId);
});

exports.databaseConnection = db;
