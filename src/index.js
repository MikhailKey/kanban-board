import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/errorBoundry';
import KanbanService from './services/kanbanService';
import KanbanServiceContext from './components/kanbanServiceContext'
import store from './store';

const kanbanService = new KanbanService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <KanbanServiceContext.Provider value={kanbanService}>
                <Router>
                    <App/>
                </Router>
            </KanbanServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
