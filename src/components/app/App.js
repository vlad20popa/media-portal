import React, {Component} from 'react';
import AppHeader from './AppHeader';
import {withRouter} from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <div>
                <AppHeader history={this.props.history}/>
            </div>

        );
    }
}