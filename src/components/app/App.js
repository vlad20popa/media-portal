import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import AppBar from 'material-ui/AppBar'
import Login from '../../pages/login.page'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from '../../pages/home.page';

const HOME_PAGE_ROUTE = "/home";
const LOGIN_PAGE_ROUTE = "/login";

//
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

export default class App extends Component {


    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    // toggleDrawer = (open) => event => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }
    //
    //     this.setState({ ...this.state, open: open });
    // };

    render() {

        // const classes = useStyles();
        console.log("render app");
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Media Portal" />
                        {/*<Toolbar>*/}
                            {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                                {/*<MenuIcon />*/}
                            {/*</IconButton>*/}
                            {/*<Typography variant="h6" className={classes.title}>*/}
                                {/*News*/}
                            {/*</Typography>*/}
                            {/*<Button color="inherit">Login/Register</Button>*/}
                        {/*</Toolbar>*/}
                    <Router>
                        <Route path={HOME_PAGE_ROUTE} component={HomePage}/>
                        <Route path={LOGIN_PAGE_ROUTE} component={Login}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}
