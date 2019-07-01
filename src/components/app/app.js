import React, {Component} from 'react';
import AppHeader from '../app-header';
import ToDoList from '../to-do-list';
import InProgressList from '../in-progress-list';
import DoneList from '../done-list'
import './app.css'
export default class App extends Component {
    render() {
    return (
        <div className='app'>
            <AppHeader/>
                <div className="flex">
                    <ToDoList/>
                    <InProgressList/>
                    <DoneList/>
                </div>
        </div>
    )
}
}