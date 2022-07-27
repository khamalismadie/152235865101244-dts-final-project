import React from "react";
import defaultImg from "../images/defaultImg.jpeg";

function BookCard(props) {
  const { book } = props;
  let imgDefined;
  if (typeof book.volumeInfo.imageLinks.smallThumbnail === "undefined") {
    imgDefined = false;
  } else {
    imgDefined = true;
  }
  return (
    <div className="card-container w-1/4 m-5 border p-3">
      <div className="flex flex-col justify-between">
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
      </div>
    </div>
  );
}

export default BookCard;