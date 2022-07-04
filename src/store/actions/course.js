export function toggleLesson(activeLesson, activeModule) {
    return {
        type: 'TOGGLE_LESSON', // indica qual eh a ação (unica no redux)
        activeLesson,
        activeModule
    }
}
