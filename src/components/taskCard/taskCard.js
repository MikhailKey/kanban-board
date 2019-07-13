import React from 'react';
import './taskCard.sass'
import {connect} from 'react-redux';
const TaskCard = ({isOpened}) => {
    let content = (
        <div className="task-bg">
            <div className="task-wrap">
                <div className="task-header">
                <h4>Название</h4>
                <button className="task-close">&times;</button>
                </div>
                <form>
                    <input className="task-input task-input_title" type="text" placeholder="Введите задание"></input>
                    <input className="task-input" type="text" placeholder="Введите дату начала"></input>
                    <input className="task-input" type="text" placeholder="Введите дату окончания"></input>
                    <button type="submit" className="task-submit">Готово</button>
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
const mapStateToProps = (state) => {
    return {    
    isOpened: state.isOpened,
    }
}
export default connect(mapStateToProps)(TaskCard);