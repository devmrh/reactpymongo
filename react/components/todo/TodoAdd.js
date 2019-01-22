import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import {addTodo} from "../../actions/todoActions"
import { connect } from "react-redux"

class TodoAdd extends Component {

    state = {
        author: '',
        task: '',
        date: '',
        errors: {}
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {author, task} = this.state;
        if (author === '') {
            this.setState({errors: {name: 'your name is required'}});
            return;
        }
        if (task === '') {
            this.setState({errors: {task: 'task cant be blank!'}});
            return;
        }

        //default(temporary) value for date for new data (use only in client side)
        //"id" for react loop key missing warining and "date" for avoid blank date for new record.
        //we do this for avoid make new request to database ... you can easily make new request to mongo db
        // to skip all this steps.

        const date = new Date().toLocaleString();
        const id = (Math.random()*1e32).toString(36);
        const done = 0;
        const newTodo = {
            author,
            task,
            date,
            id,
            done
        };

        this.props.addTodo(newTodo);

        this.setState({
            author: '',
            task: '',
            errors: {}
        });

    };
    onChange = (e) => this.setState({[e.target.name]: e.target.value});


    render() {

        const {author, task, errors} = this.state;
        return (
            <div style={{fontSize: '14px'}}>
                <div className="card mb-3">
                    <div className="card-header">Add new todo</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup
                                label="Author"
                                name="author"
                                placeholder="Enter Your Name"
                                onChange={this.onChange}
                                value={author}
                                error={errors.author}
                            />
                            <div className="form-group">
                                <label htmlFor="task">Write your description . . .</label>
                                <textarea className={"form-control " + (errors.task ? 'is-invalid' : '')} id="task"
                                          name="task" value={task} onChange={this.onChange} rows="3"></textarea>
                                {errors.task && <div className="invalid-feedback">{errors.task}</div>}
                            </div>
                            <input
                                type="submit"
                                value="Add Now"
                                className="btn btn-light btn-block"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {addTodo})(TodoAdd);