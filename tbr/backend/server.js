import express from "express";
import pool from "./database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// test app
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//test if this works... it works :3
app.get("/books", async (req, res) => {
  const books = await pool.query("SELECT * FROM book;");
  res.send({ books });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
