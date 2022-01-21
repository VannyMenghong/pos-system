import React, { Component } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {  makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';


const useStyle = makeStyles({
    title: {
        marginLeft: '20px',
      
    },
    mainTitle: {
        marginTop: '20px',   
    },
    navigationText: {
        fontWeight: '600',
        fontSize: '30px',
        color: '#1CC5DC' ,
        opacity: '0.8',
    }
})

export function NavigationTitle () {
        const location = useLocation();
        const classes = useStyle();
        return (
            <div className={classes.mainTitle} >
                <Typography variant='inherit' 
                    className={classes.navigationText}
                    sx={{ml:3}}
                        > {location.pathname.substr(1)} 
                </Typography>
                <Breadcrumbs aria-label="breadcrumb" style={{color: "#d3d3d3"}}>
                    <Link sx={{ml:3}} underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                    >
                        <Typography> {location.pathname.substr(1)} </Typography>
                    </Link>
                </Breadcrumbs>

            </div>
        )

}

export default NavigationTitle ;
