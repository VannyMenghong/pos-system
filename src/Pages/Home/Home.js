import React, { Component } from 'react';
import { Typography } from '@mui/material';
import {  makeStyles } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const useStyle = makeStyles({
    welcome: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'rgb(25, 118, 212);',
    },  
    welcomeText: {
        fontWeight: '550',
        fontSize: '50px',
        
    },
    btn: {
        backgroundColor:'red',
        
    }

})  

export function Home () {
    const classes = useStyle();
        return(
            <div>
                <div className={ classes.welcome} >
                    <Typography acnhor='center' variant='inherit' className={classes.welcomeText}>WELCOME BACK</Typography>   
                </div>
                <div>
                <CssBaseline />
                    <Container maxWidth='xl' sx={{ bgcolor: '#cfe8fc', height:'90vh',  }} >
                        <div style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            
                        <Button variant='contained' style={{outline: 'none', display: 'flex',marginRight:'20px', flexDirection: 'column', backgroundColor: '#EBA83A'}}>
                            <PersonAddAltIcon style={{fontSize: ' 150px'}} />
                            <Typography > Add New Customer</Typography>
                        </Button>
                        <Button  variant='contained' style={{outline: 'none', display: 'flex', flexDirection: 'column', backgroundColor: '#C84B31'}}>
                            <InsertDriveFileIcon style={{fontSize: ' 150px'}} />
                            <Typography > Add New Invoice</Typography>
                        </Button>
                        </div>
                        
                    </Container>
                </div>
            </div>

        )

}

export default Home ;
