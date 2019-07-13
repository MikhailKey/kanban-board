import React from 'react';
import plus from './black.svg'
import {taskOpened} from '../../actions';
import './addTask.sass';
import {connect} from 'react-redux';


const AddTask = ({taskOpened, isOpened}) => {
    return (
        <>
        <button onClick={() => taskOpened()} className="plus_button"><img className="plus" src={plus} alt="plus"/></button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isOpened: state.isOpened
    }
}
const mapDispatchToProps = () => {
   return {
    taskOpened
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
