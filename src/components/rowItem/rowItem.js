import React from 'react';
import './rowItem.sass';
const RowItem = ({task}) => {
    const {statusColor, label, start, finish, person} = task;
    const redStatus = <h4 className="rowlist-other rowlist-red">Срочно</h4>;
    const blueStatus = <h4 className="rowlist-other rowlist-blue">В работе</h4>;
    const greenStatus = <h4 className="rowlist-other rowlist-green">Готово</h4>;
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
         <div className = 'rowlist-bg'>
             <h4 className="rowlist-task">{label}</h4>
             {itemStatus}
             <h4 className="rowlist-other">{start}</h4>
             <h4 className="rowlist-other">{finish}</h4>
             <h4 className="rowlist-other">{person}</h4>
         </div>
     )
 }
export default RowItem