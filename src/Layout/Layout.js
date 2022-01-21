import Navbar from './Navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  Drawer  from '@material-ui/core/Drawer';
import  Typography  from '@material-ui/core/Typography';
import  List from '@material-ui/core/List';
import  ListItem from '@material-ui/core/ListItem';
import  ListItemIcon from '@material-ui/core/ListItemIcon';
import  ListItemText from '@material-ui/core/ListItemText';
import { Icon, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import { Button } from '@mui/material';


const drawerWidth = 300;
const useStyle = makeStyles({
    page: {
        width: '100%',
    },
    drawer: {
        width: drawerWidth ,
    },
    drawerPaper: {
        width: drawerWidth,
        boxShadow: '0px 1px 10px',
        border: 'none'
    },
    root: {
        display: 'flex',
        
    },
    title: {
        padding: ' 11px 0px',
        backgroundColor: '',
        fontSize: '25px',
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
    item: {
       
    },
    li: {
        padding: '1px',
    },
    
    dashboard: {
        marginTop: '0px',
        marginBottom: '20px',   
       
    },
    dashboardItem: {
        padding: '15px 0px',
        borderRadius: '5px',
        margin: '15px 0px 15px 0px', 
        backgroundColor: '#1CC5DC' ,
        width: '100%',
        boxShadow: '0px 2px 4px',
        
    },
    dbtext: {   
        color: '#F7F6F2',
        cursor: 'pointer',
        display: 'flex',
        fontSize: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center', 
    },
    text: {
        marginLeft: '10px',
    },
    active: {
        width: '100%',
        transition: '0.6s',
        backgroundColor: '#32CADF',
        boxShadow: '0px 0px 7px',
        width: '90%',
        marginLeft: '14px'
    },
    activeText: {
        color: 'white',
    }
    
})

export  function Layout () {
    const navigation = useNavigate();
    const location = useLocation();
    const classes = useStyle();
    const menuItems = [
        {
            text: 'Customers', 
            icon:<GroupIcon /> ,
            path: "/Customers",
            
        },
        {
            text: 'Invoices', 
            icon:<InsertDriveFileIcon /> ,
            path: "/Invoices",  
             
        },
        {
            text: 'YC Information', 
            icon:<AccessAlarmsIcon /> ,
            path: "/YC_Information",
           
        },
        {
            text: 'OM Schedul', 
            icon:<EventNoteTwoToneIcon /> ,
            path: "/OM_Schedul",
            
        },
        {
            text: 'Installation Schedul', 
            icon:<BuildTwoToneIcon /> ,
            path: "/Installation_Schedul",
            
        },
        {
            text: 'Orders', 
            icon:<BorderColorTwoToneIcon /> ,
            path: "/Orders",
            
        },
        
    ]
        return (
            <div>
                 <div className='classes.navbar'>
                     <Navbar />
                 </div>
                 <div className={classes.root}>
                    {/* side bar  */}
                    <div>
                    <Drawer
                        className={ classes.drawer}
                        variant='permanent'
                        anchor='left'
                        classes={{ paper: classes.drawerPaper }}    
                        >
                        <div 
                        className='classes.mainTitle'
                        style={{ backgroundColor: '#1976D4',boxShadow:'0px 3px 5px'}}
                        >
                            <Typography 
                                variant='h5' 
                                className={classes.title}
                                >
                                    OMEGA POS              
                            </Typography>
                        </div>
                        <div>
                            <List>  
                                <ListItem 
                                className={ classes.dashboard} 
                                >          
                                    <ListItemIcon
                                    onClick={() => navigation('/')}
                                    className={ classes.dashboardItem}                                   
                                    >
                                                <ListItemText className={classes.dbtext} >
                                                    
                                                    <Typography variant='h6' ><HomeIcon  fontSize='inherit' style={{ fontSize: '35px', marginBottom: '-8px'}} />
                                                        Dashboard
                                                    </Typography>                                                   
                                                </ListItemText>   
                                    </ListItemIcon >                                   
                                </ListItem>
                                {menuItems.map( item => 
                                    <ListItem
                                        key={item.text}
                                        className={classes.item }
                                        style={{ cursor: 'pointer'}}
                                        onClick = { () => navigation(item.path) }
                                        className={ location.pathname == item.path ? classes.active : null }
                                    >
                                        <ListItemIcon
                                             className={classes.li}                                      
                                        >
                                                {item.icon}
                                                <ListItemText 
                                                        style={{marginLeft  : '10px'}}
                                                        className={ location.pathname == item.path ? classes.activeText : null }
                                                        >{item.text}
                                                </ListItemText>
                                        </ListItemIcon>
                                        
                                    </ListItem>     
                                )}
                            </List>
                        </div>
                    </Drawer>
                    </div>
                    <div style={{width:'100%', height:'100vh'}}  >                  
                        <Outlet />          
                    </div>
                </div>
            </div>
        )
}

export default Layout;
