 import express from "express";
import pool from "./database.js";
import dotenv from "dotenv";
import {
  getAllBooks,
  getAllBooksLibrary,
  getAllBooksTbr,
  updateExistingBook,
  addNewBooktoLibrary,
  addNewBooktoTbr,
  deleteBook
} from "./controllers/bookController.js";
dotenv.config();

const app = express();
app.use(express.json());

// test app
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// GET all books from TBR/Library
app.get("/books", getAllBooks);
app.get("/books/tbr", getAllBooksTbr);
app.get("/books/library", getAllBooksLibrary);

// POST - Add book to TBR/Library
app.post("/books/tbr", addNewBooktoTbr);
app.post("/books/library", addNewBooktoLibrary);

// PUT - Update book details
app.put("/books/:isbn", updateExistingBook);

//  */
// // DELETE - Remove from TBR/Library
app.delete("/books/:isbn", deleteBook);
// app.delete("/books/library/:isbn", removeFromLibrary);

// //category section

// // GET - all categories
// app.get("/categories", getAllCategories);

// // GET - single category by ID (optional but useful)
// app.get("/categories/:cat_id", getCategoryById);

// // POST - add new category
// app.post("/categories", addCategory);

// // POST - connect book to category
// app.post("/books/:isbn/categories", connectBooktoCategory);
// // or
// app.post("/categories/:cat_id/books", connectBooktoCategory);

// // PUT - update category
// app.put("/categories/:cat_id", updateCategory);

// // DELETE - remove category
// app.delete("/categories/:cat_id", removeCategory);

// // DELETE - disconnect book from category
// app.delete("/books/:isbn/categories/:cat_id", disconnectBookFromCategory);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
