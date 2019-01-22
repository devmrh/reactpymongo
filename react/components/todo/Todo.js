import React, {Component} from 'react';
import '../../../static/css/main.css'
import {Spring} from "react-spring";
import {deleteTodo, markTodoCompleted} from "../../actions/todoActions"
import {connect} from "react-redux"
import classnames from 'classnames'

class Todo extends Component {


    onClickRemoveItem = (id) => {
        this.props.deleteTodo(id)
    };

    onClickFinishItem = (id, done) => {
        const data = {
            id: id,
            done: !done
        };
        this.props.markTodoCompleted(data)
    };

    render() {
        const {id, task, author, date, done} = this.props.todo;

        return (
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1 }}
                config={{delay: 50, duration: 1000}}
            >
                {props => (
                    <li style={props} className="list-group-item">
                        <div className={classnames('task-title', {
                            'done': done
                        })}>
                            {task}
                        </div>
                        <div className="box-meta" style={{background: done ? '#e6ffe6' : ''}}>
                            <div>
                                <div>todo created by: {author}</div>
                                <div>todo creation time: {date}</div>
                            </div>
                            <div className="box-action">
                                <button type="button" onClick={this.onClickFinishItem.bind(this, id, done)}
                                        className="btn btn-primary">
                                    <i className={classnames('fas fa-check', {
                                        'fas fa-undo': done
                                    })}></i>
                                </button>
                                <button type="button" onClick={this.onClickRemoveItem.bind(this, id)}
                                        className="btn btn-danger">
                                    <i className="fas fa-times-circle "></i>
                                </button>
                            </div>

                        </div>
                    </li>
                )}

            </Spring>

        );
    }
}


export default connect(null, {deleteTodo, markTodoCompleted})(Todo);