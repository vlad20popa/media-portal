import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import HomePage from "./pages/home.page";
import Login from "./pages/login.page";
import FovoritesPage from "./pages/favorites.page"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

const HOME_PAGE_ROUTE = "/home";
const LOGIN_PAGE_ROUTE = "/login";
const FAVORITES_PAGE_ROUTE = "/favorites";


const routes =
    (
    <MuiThemeProvider>
        <Router>
            <Route path="/" component={App}/>
            <Route path={HOME_PAGE_ROUTE} component={HomePage}/>
            <Route path={LOGIN_PAGE_ROUTE} component={Login}/>
            <Route path={FAVORITES_PAGE_ROUTE} component={FovoritesPage}/>
        </Router>
    </MuiThemeProvider>);


ReactDOM.render(routes,
  document.getElementById('root')
);
