import pool from "../database.js";

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
  const client = await pool.connect();
  //required since we are doing more than 1 query
  try {
    const { isbn, author, title, pages, publisher, is_owned, user_id, images } =
      req.body;

    if (!isbn || !user_id) {
      console.log("book needs isbn and user_id");
      return res.status(400).json({ error: "isbn and user_id required" });
    }
    // query start
    await client.query("begin");

    await pool.query(
      `insert into books (isbn, author, title, pages,publisher,is_owned, in_library, user_id, images) 
      values($1, $2, $3, $4, $5, $6, false, $7, $8)`,
      [isbn, author, title, pages, publisher, is_owned, user_id, images]
    );
    await pool.query(
      `insert into tbr_book (user_id, isbn)
      values( $1, $2)`,
      [user_id, isbn]
    );
    await client.query("commit");
    // query end

    res.status(201).json({ message: "book added to tbr", title });
    //added sucessfuly
  } catch (error) {
    await client.query("rollback"); // -> undos all queries called
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
    //done with connection
  }
};

export const addNewBooktoLibrary = async (req, res) => {
  const client = await pool.connect();
  //required since we are doing more than 1 query
  try {
    const { isbn, author, title, pages, publisher, is_owned, user_id, images } =
      req.body;

    if (!isbn || !user_id) {
      console.log("book needs isbn and user_id");
      return res.status(400).json({ error: "isbn and user_id required" });
    }
    // query start
    await client.query("begin");

    await pool.query(
      `insert into books (isbn, author, title, pages,publisher,is_owned, in_library, user_id, images) 
      values($1, $2, $3, $4, $5, $6, true, $7, $8)`,
      [isbn, author, title, pages, publisher, is_owned, user_id, images]
    );
    await pool.query(
      `insert into tbr_book (user_id, isbn)
      values( $1, $2)`,
      [user_id, isbn]
    );
    await client.query("commit");
    // query end

    res.status(201).json({ message: "book added to library", title });
    //added sucessfuly
  } catch (error) {
    await client.query("rollback"); // -> undos all queries called
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
    //done with connection
  }
};

// put methods

export const updateExistingBook = async (req, res) => {
  const { isbn } = req.params;
  try {
    const { author, title, pages, publisher, is_owned, images } = req.body;
    if(author !== undefined) author.push
    await pool.query(``, [author, title, pages, publisher, is_owned, images]);

    res.status(201).json({ message: "book has been updated ", title });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
