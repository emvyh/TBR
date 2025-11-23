import axios from "axios";

//gets the isbn of book if avail!
function getISBN(iddy) {
  if (!iddy) {
    return "not avail";
  }
  //there are two types of isbn
  const isbn13 = iddy.find((id) => id.type === "ISBN_13");
  const isbn10 = iddy.find((id) => id.type === "ISBN_10");

  return isbn13?.identifier || isbn10?.identifier || "Not available";
}
// gets the year that the book was published
function getYear(publishedDate) {
  if (!publishedDate) return "Not specified";

  return publishedDate.split("-")[0];
}
export function getQuery() {
  return search;
}
export async function getbookData(search) {
  //url for api calls
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}+bestseller&printType=books&maxResults=20`;

  try {
    const response = await axios.get(url);

    const books =
      response.data.items?.map((item) => {
        const volumeInfo = item.volumeInfo;

        //get the data wanted:
        return {
          title: volumeInfo.title || "no title avail.",
          author: volumeInfo.authors || "no author avail",
          pageCount: volumeInfo.pageCount || "n/a",
          genres: volumeInfo.categories || ["n/a"],
          isbn: getISBN(volumeInfo.industryIdentifiers),
          year: getYear(volumeInfo.publishedDate),
          pic:
            volumeInfo.imageLinks?.thumbnail?.replace("&edge=curl", "") || null,
          publisher: volumeInfo.publisher || "n/a",
          description: volumeInfo.description || "none",
        };
      }) || [];
    return books;
    //hehe
  } catch (error) {
    console.error("error fetching: ", error);
    throw error;
  }
}

export async function getbookbyISBN(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  try {
    const response = await axios.get(url);
    const book =
      response.data.items?.map((item) => {
        const volumeInfo = item.volumeInfo;

        //get the data wanted:
        return {
          title: volumeInfo.title || "no title avail.",
          author: volumeInfo.authors || "no author avail",
          pageCount: volumeInfo.pageCount || "n/a",
          genres: volumeInfo.categories || ["n/a"],
          isbn: getISBN(volumeInfo.industryIdentifiers),
          year: getYear(volumeInfo.publishedDate),
          pic: volumeInfo.imageLinks?.thumbnail || null,
        };
      }) || [];
    console.log("formatted books: ", book);
    return book;
  } catch (error) {
    console.error("error fetching: ", error);
    throw error;
  }
}
