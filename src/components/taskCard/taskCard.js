import React, {Component} from 'react';
import './taskCard.sass'
import {connect} from 'react-redux';
import {taskClosed, newTaskAdded} from '../../actions';
class TaskCard extends Component {
    
    onAddTask(e) {
        console.log(e.target.value)
    }
    onAddStart(e) {
        console.log(e.target.value)
    }
    onAddFinish(e) {
        console.log(e.target.value)
    }
    
    
    render() {
    const {isOpened, taskClosed, newTaskAdded} = this.props;
    let content = (
        <div className="task-bg">
            <div className="task-wrap">
                <div className="task-header">
                <h4>Название</h4>
                <button onClick={() => taskClosed()} className="task-close">&times;</button>
                </div>
                {/*<form>*/}
                    <input onChange = {(e) => this.onAddTask(e)} className="task-input task-input_title"  type="text" placeholder="Введите задание"></input>
                    <input className="task-input" type="text" placeholder="Введите дату начала"></input>
                    <input className="task-input" type="text" placeholder="Введите дату окончания"></input>
                    <button type="text" onClick={() => newTaskAdded('Попытать счастье', '6.06', '7.08')} className="task-submit">Готово</button>
                {/*</form>*/}
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
    }
}
const mapDispatchToProps = {
    taskClosed,
    newTaskAdded
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);