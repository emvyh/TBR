import pool from database.js;

// get functions

export const getAllBooks = async (req, res) => {
try     {
  const result = await pool.query("SELECT * FROM book");
    res.json({ books: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBooksTbr = async (req, res) => {
    try {
        const result = await pool.query("select * from book where in_library = false");
        res.json({ books: result.rows });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getAllBooksLibrary = async (req, res) => {
    try {
        const result = await pool.query("select * from book where in_library = true");
        res.json({ books: result.rows });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//post functions

export const addNewBooktoTbr = async (req, res) 