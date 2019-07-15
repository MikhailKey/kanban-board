import React  from 'react';
import './listItem.sass'

const ListItem = ({task, onTaskDeleted}) => {
    
    const {statusColor, label, start, finish, person} = task;
    const redStatus = <h4 className="ListItem_mark ListItem_mark_red">Срочно</h4>;
    const blueStatus = <h4 className="ListItem_mark ListItem_mark_blue">В работе</h4>;
    const greenStatus = <h4 className="ListItem_mark ListItem_mark_green">Готово</h4>;
    let itemStatus = '';
    switch (statusColor) {
        case 'red':
            itemStatus = redStatus;
            break;
        case 'blue':
            itemStatus = blueStatus;
            break;
        case 'green':
            itemStatus = greenStatus;
            break;
        default: 
            itemStatus = '';
        break;
    }
    return (
        <>
        <div className="ListItem_bg" draggable="true">
        <div className="task-header">
            {itemStatus}
            <button onClick={() => onTaskDeleted()} className="task-close">&times;</button>
                </div>
            <h2 className="ListItem_title">{label}</h2>
                <div className="ListItem_date">
                    <p>Старт: {start}</p><p>Финиш: {finish}</p>
                </div>
                <div className="ListItem_person">
                    <p>Исполнитель:</p>
                    <span className="ListItem_circle"></span>
                    <p>{person}</p>
                </div>
        </div>
        </>
    )
}

export default ListItem