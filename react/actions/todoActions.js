import {GET_TODOS, ADD_TODO, DELETE_TODO, DONE_TASK} from './types'
import axios from 'axios'

//development server port is 5000
const server = location.protocol + '//' + location.hostname + ':' + 5000;

export const getTodos = () => async dispatch => {
    const res = await axios.get(server + "/api/getlist");
    dispatch({
        type: GET_TODOS,
        payload: res.data
    })
};

export const deleteTodo = (id) => async dispatch => {
    const res = await axios.delete(server + `/api/deletelist/${id}`);

    dispatch({
        type: DELETE_TODO,
        payload: id
    })
};

export const addTodo = (todo) => async dispatch => {
    const res = await axios.post(server + "/api/addlist", todo);
    dispatch({
        type: ADD_TODO,
        payload: todo
    })
};

export const markTodoCompleted = (data) => async dispatch => {
    const res = await axios.put(server + "/api/updatelist", data);
    dispatch({
        type: DONE_TASK,
        payload: data
    })
};