import React from 'react';
import KanbanServiceContext from '../kanbanServiceContext';


const WithKanbanService = () => (Wrapped) => {
    return (props) => {
        return (
            <KanbanServiceContext.Consumer>
                {
                    (KanbanService) => {
                        return <Wrapped {...props} KanbanService={KanbanService}/>
                    }
                }
            </KanbanServiceContext.Consumer>
        )
    }
};
export default WithKanbanService;