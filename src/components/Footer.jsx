import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core/";

const Footer = () => <>
        <Grid container justify="center" style={{minHeight: "10px"}}>
            <Grid container item sm={10} xs={12} justify="center" >
                <Grid item sm={6} xs={12} justify="center">
                    <Typography paragraph align="center">
                       Bukusaku merupakan aplikasi mudah untuk menyimpan sementara buku yang ingin kamu baca dan temukan dari google book, Traktir saya kopi jika aplikasi ini bermanfaat <Link href="https://www.buymeacoffee.com/8PYk7yj" target="_blank" alt="Stripe">Traktir Sekarang</Link>.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <AppBar position="static" elevation={0} component="footer" color="primary">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">Khamal ismadie ©2022</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;