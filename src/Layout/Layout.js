import Navbar from './Navbar';
import { Link, Outlet } from 'react-router-dom';
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
    },
    root: {
        display: 'flex',
    },
    title: {
        padding: ' 20px 0px',
        backgroundColor: '',
        fontSize: '26px',
        fontWeight: '600'
    },
    item: {
        padding: '10px 0px',    
    }
    
})

export  function Layout () {
    const navigation = useNavigate();
    const classes = useStyle();
    const menuItems = [
        {
            text: 'Home', 
            icon:<HomeIcon /> ,
            path: "/",
        },
        {
            text: 'Customers', 
            icon:<GroupIcon /> ,
            path: "/Customer",
        },
        {
            text: 'Invoice', 
            icon:<InsertDriveFileIcon /> ,
            path: "/Invoice",    
        },
        {
            text: 'YC Information', 
            icon:<AccessAlarmsIcon /> ,
            path: "/YC",
        },
        {
            text: 'OnSite Measurement Schedul', 
            icon:<EventNoteTwoToneIcon /> ,
            path: "/Onsite",
        },
        {
            text: 'Installation Schedul', 
            icon:<BuildTwoToneIcon /> ,
            path: "/Install",
        },
        {
            text: 'Order', 
            icon:<BorderColorTwoToneIcon /> ,
            path: "/Order",
        },
        
    ]
        return (
            <div>
                 <div>
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
                    <div>
                        <Typography variant='h5' className={classes.title}>
                            POS Construction
                        </Typography>
                    </div>
                    <div>
                        <List>
                            {menuItems.map( item => 
                                <ListItem
                                key={item.text}
                                button
                                color='secondary'
                                className={classes.item}
                                onClick= { () => navigation(item.path) }
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                     <ListItemText>{item.text}</ListItemText>
                                </ListItem> 
                            )}
                        </List>
                    </div>

                </Drawer>
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
            </div>
        )
}

export default Layout;
