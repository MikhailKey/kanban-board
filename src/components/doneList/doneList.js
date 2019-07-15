import React, {Component} from 'react';
import AddTask from '../addTask';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {allTasksLoaded, allTasksError, taskDeleted} from '../../actions';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import ListItem from '../listItem';
import idGenerator from "react-id-generator";
class DoneList extends Component {
    componentDidMount() {
        const {KanbanService} = this.props;
        KanbanService.getAllTasks()
        .then(res => this.props.allTasksLoaded(res)) 
        .catch(res => this.props.allTasksError(res));
    }
    render() {
        const {allTasks, loading, error, taskDeleted} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
    return (
        <div className="toDoList">
            <h2>Сделано</h2>
            <AddTask/>
            {
                allTasks.map((task) => { if (task.statusColor === 'green') {
                    return <ListItem key={idGenerator()} task={task} onTaskDeleted={() => taskDeleted(task.label)}/>
                } else {return null}}
                      
                    )  
            }
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        allTasks: state.allTasks,
        loading: state.loading,
    }
}
const mapDispatchToProps =  {
    allTasksLoaded,
    allTasksError,
    taskDeleted
};
export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(DoneList));