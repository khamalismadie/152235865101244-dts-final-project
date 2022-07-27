import React from "react";

import { Box, Typography } from "@mui/material";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1">Temukan buku favoritmu disini</Typography>
      </Box>
    </>
  );
};

export default HomePage;