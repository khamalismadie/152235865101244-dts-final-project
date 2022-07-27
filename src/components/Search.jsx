import React, { useState } from "react";
import request from "superagent";
import BookList from "./BookList";
import {Box, TextField, Button} from "@material-ui/core/";
import styles from "./Search.module.css";

function Search() {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  const searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: searchField })
      .then((data) => {
        const newBooks = data.body.items;
        setBooks(newBooks);
      });
  };

  const handleSearchField = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <Box className={styles.search} >
      <form onSubmit={(e) => searchBook(e)}>
        <TextField
          className="shadow appearance-none border rounded mr-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Books..."
          value={searchField}
          onChange={(e) => handleSearchField(e)}
        />
        <Button variant="contained" color="primary" type="submit">
  Submit
</Button>
      </form>
      <BookList books={books} />
    </Box>
  );
}

export default Search;