import React from "react";
import defaultImg from "../images/defaultImg.jpeg";
import { Card ,Grid, Typography } from "@mui/material";

function BookCard(props) {
  const { book } = props;
  let imgDefined;
  if (typeof book.volumeInfo.imageLinks.smallThumbnail === "undefined") {
    imgDefined = false;
  } else {
    imgDefined = true;
  }
  return (
    <Grid sx={{ alignItems:`center`, justify:`center` }}>
      <Card variant="outlined">
        <img
          src={`${
            imgDefined ? book.volumeInfo.imageLinks.smallThumbnail : defaultImg
          }?w=300&h=300&fit=crop&auto=format`}
          alt={book.volumeInfo.title}
        />
        <Typography variant="h6">Judul : {book.volumeInfo.title}</Typography>
        <Typography variant="subtitle1">Penulis : {book.volumeInfo.authors}</Typography>
        <Typography variant="subtitle1">Tanggal terbit : {book.volumeInfo.publishedDate}</Typography>
      </Card>
    </Grid>
  );
}

export default BookCard;