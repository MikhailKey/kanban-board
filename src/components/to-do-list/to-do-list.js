import React from 'react';
import AddTask from '../add-task';
import ListItem from '../list-item';
const ToDoList = () => {
    return (
        <div className="toDoList">
            <h1>Сделать</h1>
            <AddTask/>
            <ListItem statusColor={'red'}/>
        
        </div>
    )
}

export default ToDoList 
