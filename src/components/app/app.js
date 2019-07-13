import React, {Component} from 'react';
import AppHeader from '../appHeader';
import TaskCard from '../taskCard';
//import ToDoList from '../toDoList';
import InProgressList from '../inProgressList';
//import DoneList from '../doneList'
import './app.sass'
export default class App extends Component {
    
    render() {
    return (
        <>
        
        <TaskCard/> 
            <div className='app'>
                <AppHeader/>
                    <div className="flex">
                    <InProgressList/>
                    
                        {/* <ToDoList/>
                    
                        <DoneList/>*/}
                    </div>
            </div>
        </>
    )
}
}