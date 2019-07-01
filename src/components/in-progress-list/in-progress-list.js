import React from 'react';
import AddTask from '../add-task';
import ListItem from '../list-item';
const InProgressList = () => {
    return (
        <div className="toDoList">
            <h1>В прогрессе</h1>
            <AddTask/>
            <ListItem statusColor={'blue'}/>
        
        </div>
    )
}

export default InProgressList