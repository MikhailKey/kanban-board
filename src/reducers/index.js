import idGenerator from "react-id-generator";
const initialState = {
    allTasks: [],
    error: false,
    loading: true,
    isOpened: false,
    task: '',
    start: '',
    finish: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ALL_TASKS_LOADED':
            return {
                ...state,
                loading: false,
                allTasks: action.payload
            };
        case 'ALL_TASKS_ERROR':
            return {
                ...state,
                loading: false,
                allTasks: state.allTasks,
                error: true
            };
        case 'TASK_OPENED':
            return {
                ...state,
                isOpened: true
            };
        case 'TASK_CLOSED':
            return {
                ...state,
                isOpened: false
            }
        case 'NEW_TASK_ADDED':
            const newItem = {
                statusColor: "red",
                label: action.task,
                start: action.start, 
                finish: action.finish, 
                person: "Иванов И.И.", 
                id: idGenerator()
            }
            const newArr = [...state.allTasks, newItem]
            return {
                ...state,
                allTasks: newArr,
                isOpened: false
            }
            default:
                return state;
    }
}
export default reducer;