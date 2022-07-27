import React from "react";
import defaultImg from "../images/defaultImg.jpeg";
import { Card ,Box, Typography } from "@mui/material";

function BookCard(props) {
  const { book } = props;
  let imgDefined;
  if (typeof book.volumeInfo.imageLinks.smallThumbnail === "undefined") {
    imgDefined = false;
  } else {
    imgDefined = true;
  }
  return (
    <Box sx={{ alignSelf: 'flex-start' }}>
      <Card variant="outlined">
        <img
          src={
            imgDefined ? book.volumeInfo.imageLinks.smallThumbnail : defaultImg
          }
          className="w-auto h-96"
          alt=""
        />
        <h2>Titre : {book.volumeInfo.title}</h2>
        <h3>Auteur(s) : {book.volumeInfo.authors}</h3>
        <p>Date : {book.volumeInfo.publishedDate}</p>
      </Card>
    </Box>
  );
}

export default BookCard;