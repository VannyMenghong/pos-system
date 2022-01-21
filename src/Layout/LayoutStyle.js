import { makeStyles } from '@material-ui/core';

const drawerWidth = 300;
export const LayoutStyle = makeStyles(thems => ({
    
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

}))