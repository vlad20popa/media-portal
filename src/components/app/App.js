import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from '../../pages/login.page'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from '../../pages/home.page';
import AppHeader  from './AppHeader';

const HOME_PAGE_ROUTE = "/home";
const LOGIN_PAGE_ROUTE = "/login";

    export default class App extends Component {

        componentDidMount(){
            console.log(this.props.router);
        }

        render() {
            return (
                <MuiThemeProvider>
                    <div>
                        <AppHeader/>
                        <Router>
                            <Route path={HOME_PAGE_ROUTE} component={HomePage}/>
                            <Route path={LOGIN_PAGE_ROUTE} component={Login}/>
                        </Router>
                    </div>
                </MuiThemeProvider>
            );
        }
    }