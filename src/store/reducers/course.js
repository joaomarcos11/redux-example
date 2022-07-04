const INITIAL_STATE =  {
    activeModule: {},
    activeLesson: {},
    modules: [
        { 
            id: 1, 
            title: 'Iniciando com React', 
            lessons: [
                { id: 1, title: 'Primeira aula'},
                { id: 2, title: 'Segunda aula' }
            ] 
        },
        { 
            id: 2, 
            title: 'Aprendendo Redux com React', 
            lessons: [
                { id: 3, title: 'Terceira aula'},
                { id: 4, title: 'Quarta aula' }
            ] 
        },
    ]
};

// state : estado anterior a mudança que a action pretender fazer
// no inicio, vem vazio já que não houve uma action, por isso, pode-se setar o valor inicial
// action : 
export default function courseReducer(state = INITIAL_STATE, action) {
    console.log(action);

    if (action.type === 'TOGGLE_LESSON') {
        return { 
            ...state, 
            activeLesson: action.activeLesson,
            activeModule: action.activeModule
        };
    }
    
    return state;
}
