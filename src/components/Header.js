import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3' style={{color:'white'}}>FUTSHOP</Typography>
            <Cart/>   
        </Grid>
    )
}

export default Header;
