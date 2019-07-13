import React from 'react';
import AddTask from '../addTask';
import ListItem from '../listItem';
const DoneList = ({posts}) => {
    const elements = posts.map((item) => {
        if (typeof(item) === 'object' && item.statusColor === 'green') {
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
            <h1>Сделано</h1>
            <AddTask />
            {elements}
        
        </div>
    )
}

export default DoneList