import React from 'react';
import AddTask from '../addTask';
import ListItem from '../listItem';
const ToDoList = ({posts}) => {
   const elements = posts.map((item) => {
        if (typeof(item) === 'object' && item.statusColor === 'red') {
            const {id, ...itemProps} = item;
         return (
             <div key={id}>
             <ListItem {...itemProps}/>
             </div>
         )
        }
    })
    return (
        <div className="toDoList">
            <h1>Сделать</h1>
            <AddTask/>
            {elements}
        
        </div>
    )
}

export default ToDoList 
