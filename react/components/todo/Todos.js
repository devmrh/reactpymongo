import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getTodos} from '../../actions/todoActions'
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import {Transition, animated} from 'react-spring'

class Todos extends Component {

    componentDidMount() {
        this.props.getTodos();

    }

    render() {
        const {todos} = this.props;
        const uncheckedTasks = this.props.todos.filter(task => task.done == 0);
        const checkedTasks = this.props.todos.filter(task => task.done == 1);
        const tasks = uncheckedTasks.concat(checkedTasks);

        return (
            <div className="container">
                <div className="todo-container">
                    <div style={{flexGrow: "1", padding: "0 5px"}}>
                        <ul className="list-group">
                            {tasks.map(todo => (
                                <Todo key={String(todo.id)} todo={todo}/>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Transition
                            native
                            items={this.props.showtodoform}
                            from={{opacity: 0, marginTop: -500}}
                            enter={{opacity: 1, marginTop: 0}}
                            leave={{opacity: 0, marginTop: -500}}
                            config={{delay: 200, duration: 400}}
                        >
                            {show => show && (props => (
                                <animated.div style={props}>
                                    <TodoAdd/>
                                </animated.div>
                            ))}

                        </Transition>
                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state) => ({
    todos: state.todo.todos
});

export default connect(mapStateToProps, {getTodos})(Todos);