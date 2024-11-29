const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database: ", err);
  } else {
    console.log("Connected to the MySQL database");
  }
});

// API routes for weddings
app.get("/api/weddings", (req, res) => {
  db.query("SELECT * FROM weddings", (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

app.post("/api/weddings", (req, res) => {
  const { bride_name, groom_name, wedding_date, venue, photographer, status } = req.body;
  db.query(
    "INSERT INTO weddings (bride_name, groom_name, wedding_date, venue, photographer, status) VALUES (?, ?, ?, ?, ?, ?)",
    [bride_name, groom_name, wedding_date, venue, photographer, status],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: "Wedding created successfully", id: results.insertId });
      }
    }
  );
});

// Get all services
app.get("/api/services", (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(results);
  });
});
// Add a new service
app.post("/api/services", (req, res) => {
  const { name, description, price, category } = req.body;
  db.query("INSERT INTO services (name, description, price, category) VALUES (?, ?, ?, ?)", [name, description, price, category], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: "Service added successfully", id: results.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
