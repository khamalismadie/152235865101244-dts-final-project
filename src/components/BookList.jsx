import React from "react";
import BookCard from "./BookCard";
import {Box, Grid} from '@mui/material/';

function BookList(props) {
  const { books } = props;
  return (
    <Grid style={{ width: '90%' }}>
     <Box sx={{ display: 'grid', columnGap: 3, rowGap: 3, gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {books.map((book, i) => {
        {
          return <BookCard book={book} key={i} />;
        }
      })}
    </Box>
    </Grid>
  );
}

export default BookList;