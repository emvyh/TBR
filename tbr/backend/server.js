import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hi" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
