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
const taskClosed = () => {
    return {
        type: 'TASK_CLOSED'
    }
}
const newTaskAdded = (task, start, finish) => {
    return {
        type: 'NEW_TASK_ADDED',
        task: task,
        start: start,
        finish: finish,
    }
}

export {
    allTasksLoaded,
    taskOpened,
    allTasksError,
    taskClosed,
    newTaskAdded,
}