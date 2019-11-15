import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import HomePage from "./pages/home.page";
import Login from "./pages/login.page";
import FovoritesPage from "./pages/favorites.page"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import * as ROUTES from './pages/applicationRoutes';


console.log(ROUTES.LOGIN_PAGE_ROUTE);

const routes =
    (
    <MuiThemeProvider>
        <Router>
            <Route path={ROUTES.PLATFORM} component={App}/>
            <Route path={ROUTES.HOME_PAGE_ROUTE} component={HomePage}/>
            <Route path={ROUTES.LOGIN_PAGE_ROUTE} component={Login}/>
            <Route path={ROUTES.FAVORITES_PAGE_ROUTE} component={FovoritesPage}/>
        </Router>
    </MuiThemeProvider>);


ReactDOM.render(routes,
  document.getElementById('root')
);
