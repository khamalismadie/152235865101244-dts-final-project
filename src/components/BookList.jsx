import React from "react";
import BookCard from "./BookCard";
import {Box, Grid} from '@mui/material/';

function BookList(props) {
  const { books } = props;
  return (
    <Grid style={{ alignItems:`center`, width: '100%' }}>
     <Box sx={{ display: 'grid', columnGap: 2, rowGap: 2, gridTemplateColumns: 'repeat(3, 1fr)' }}>
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