import React, {Component} from 'react';
import AppHeader from '../appHeader';
import TaskCard from '../taskCard';
import {TablePage, RowPage} from '../pages';
import {Switch, Route} from 'react-router-dom';
import './app.sass'
export default class App extends Component {
    
    render() {
    return (
        <>
        
        <TaskCard/> 
            <div className='app'>
                <AppHeader/>
                <Switch>
                    <Route path='/' exact component={TablePage}/> 
                    <Route path='/list/' exact component={RowPage}/>  
                </Switch>
            </div>
        </>
    )
}
}