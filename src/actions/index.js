const allTasksLoaded = (allTasks) => {
    return {
        type: 'ALL_TASKS_LOADED',
        payload: allTasks
    }
}
const allTasksError = (errorMessage) => {
    return {
        type: 'BEST_SELLERS_ERROR',
        errorType: errorMessage
    };
};
const taskOpened = () => {
    return {
        type: 'TASK_OPENED'
    }
}

export {
    allTasksLoaded,
    taskOpened,
    allTasksError
}