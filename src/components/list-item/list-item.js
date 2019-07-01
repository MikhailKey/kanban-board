import React from 'react';
import './list-item.css'

const ListItem = ({statusColor}) => {

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
            <h2 className="ListItem_title">Прочитать книгу</h2>
                <div className="ListItem_date">
                    <p>Старт: 12.06</p><p>Финиш: 12.08</p>
                </div>
                <div className="ListItem_person">
                    <p>Исполнитель:</p>
                    <span className="ListItem_circle"></span>
                    <p>Иванов И.В.</p>
                </div>
        </div>
    )
}
export default ListItem