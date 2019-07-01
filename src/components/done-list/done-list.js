import React from 'react';
import AddTask from '../add-task';
import ListItem from '../list-item';
const DoneList = () => {
    return (
        <div className="toDoList">
            <h1>Сделано</h1>
            <AddTask />
            <ListItem statusColor={'green'}/>
        
        </div>
    )
}

export default DoneList