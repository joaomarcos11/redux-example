import React from 'react';

// import { Container } from './styles';

import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

// vai transformar a classComponent em uma stateless function
// export default class Sidebar extends Component {
const Sidebar = ({ modules, toggleLesson }) => (
    // todo componente que é usado no connect possui o parametro dispatch
    <aside>
        {
            modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {
                            module.lessons.map(lesson => (
                                <li key={lesson.id}>
                                    {lesson.title}
                                    <button onClick={() => toggleLesson(module, lesson)}>
                                        Selecionar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))
        }
    </aside>
);

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
// 1o parametro : função que recebe o estado, e deve-se retornar dessa função
// quais props eu quero daquele estado
// 2o parametro : função que lida com actions
