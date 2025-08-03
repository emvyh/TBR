import axios from "axios";
export async function getbookData(search) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  try {
    const response = await axios.get(url);
    console.log(response.data.items);
    return response.data;
  } catch (error) {
    console.error("error fetching: ", error);
    throw error;
  }
}

export async function getbookISBN(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  try {
    const response = await axios.get(url);
    console.log(response.data.items);
    return response.data;
  } catch (error) {
    console.error("error fetching: ", error);
    throw error;
  }
}
