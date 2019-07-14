import React, {Component} from 'react';
import './taskCard.sass'
import {connect} from 'react-redux';
import {taskClosed, newTaskAdded} from '../../actions';
class TaskCard extends Component {

    render() {
    const {isOpened, taskClosed, newTaskAdded} = this.props;
    let task = '';
    let start = '';
    let finish =  '';
    const onAddTask = (e) => {
        return task = e.target.value;
    }
    const onAddStart = (e) => {
        return start = e.target.value;
    }
    const onAddFinish = (e) => {
        return finish = e.target.value;
    }
    
    let content = (
        <div className="task-bg">
            <div className="task-wrap">
                <div className="task-header">
                <h4>Название</h4>
                <button onClick={() => taskClosed()} className="task-close">&times;</button>
                </div>
                <form>
                    <input onChange = {(e) => onAddTask(e)} className="task-input task-input_title"  type="text" placeholder="Введите задание"></input>
                    <input onChange = {(e) => onAddStart(e)} className="task-input" type="text" placeholder="Введите дату начала"></input>
                    <input onChange = {(e) => onAddFinish(e)} className="task-input" type="text" placeholder="Введите дату окончания"></input>
                    <button type="text" onClick={() => newTaskAdded(task, start, finish)} className="task-submit">Готово</button>
                </form>
            </div>
        </div>
    )
    if (!isOpened) {
        content=null;
    }
    return (
        <>
        {content}
        </>
    )
}
}
const mapStateToProps = (state) => {
    return {    
    isOpened: state.isOpened,
    task: state.task,
    start: state.start,
    finish: state.finish,
    }
}
const mapDispatchToProps = {
    taskClosed,
    newTaskAdded
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);