const initialState = {
    allTasks: [],
    error: false,
    loading: true,
    isOpened: false
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
            default:
                return state;
    }
}
export default reducer;