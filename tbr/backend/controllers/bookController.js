import pool from "database.js";

// get functions

export const getAllBooks = async (req, res) => {
  try {
    const { user_id } = req.query;
    const result = await pool.query(`SELECT * from books where user_id = $1`, [
      user_id,
    ]);
    res.json({ books: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBooksTbr = async (req, res) => {
  try {
    const { user_id } = req.query;

    const result = await pool.query(
      `select * from books 
        where in_library = false 
        and user_id = $1`,
      [user_id]
    );
    //the array ^^ $1 is getting information from
    // ensures that people dont just put in sql

    res.json({ books: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBooksLibrary = async (req, res) => {
  try {
    const { user_id } = req.query;

    const result = await pool.query(
      `select * from books 
        where in_library = true and user_id = $1`,
      [user_id]
    );

    res.json({ books: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//post functions

export const addNewBooktoTbr = async (req, res) => {
  try {
    const { isbn, author, title, pages, publisher, is_owned, user_id, images } =
      req.body;

    if (!isbn) {
      console.log("book needs isbn");
      return res.status(400).json({ error: "isbn required" });
    }
    await pool.query(
      `insert into book (isbn, author, title, pages,publisher,is_owned, in_library, user_id, images) 
      values($1, $2, $3, $4, $5, $6, false, $7, $8)`,
      [isbn, author, title, pages, publisher, is_owned, user_id, images]
    );

    res.status(201).json({ message: "book added to tbr", title });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
