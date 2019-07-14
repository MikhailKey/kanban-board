import React, {Component} from 'react';
import ToDoList from '../toDoList';
import InProgressList from '../inProgressList';
import DoneList from '../doneList'

export default class TablePage extends Component {
 render() {
     return (
        <div className="flex">
            <ToDoList/>
            <InProgressList/>
            <DoneList/>
    </div>
     )
 }
}