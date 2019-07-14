import React, {Component} from 'react';
import AddTask from '../addTask';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {allTasksLoaded, allTasksError} from '../../actions';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import ListItem from '../listItem';
import idGenerator from "react-id-generator";
class ToDoList extends Component {
    componentDidMount() {
        const {KanbanService} = this.props;
        KanbanService.getAllTasks()
        .then(res => this.props.allTasksLoaded(res)) 
        .catch(res => this.props.allTasksError(res));
    }
    render() {
        const {allTasks, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
    return (
        <div className="toDoList">
            <h2>Сделать</h2>
            <AddTask/>
            {
                allTasks.map((task) => {if (task.statusColor === 'red') {
                    return <ListItem key={idGenerator()} task={task}/>
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
    allTasksError
};
export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ToDoList));