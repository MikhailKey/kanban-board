import React  from 'react';
import './listItem.sass'

const ListItem = ({task}) => {
    
    const {statusColor, label, start, finish, person} = task;
    const redStatus = <h3 className="ListItem_mark ListItem_mark_red">Срочно</h3>;
    const blueStatus = <h3 className="ListItem_mark ListItem_mark_blue">В работе</h3>;
    const greenStatus = <h3 className="ListItem_mark ListItem_mark_green">Готово</h3>;
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
        <div className="ListItem_bg">
            {itemStatus}
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
    )
}

export default ListItem