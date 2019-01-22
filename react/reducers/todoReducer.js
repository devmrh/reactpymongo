import {GET_TODOS, DELETE_TODO, ADD_TODO, DONE_TASK} from '../actions/types'

const initialState = {
    todos: [
        {
            id: 1,
            author: "john doe",
            task: "learn react!",
            done: 1,
            date: "1/21/2019, 15:08:37 PM"
        },
        {
            id: 2,
            author: "john doe",
            task: "learn python!",
            done: 0,
            date: "1/21/2019, 15:08:37 PM"
        },
    ],
};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload !== undefined ?[...action.payload, ...state.todos]: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    todo => todo.id !== action.payload
                )
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case DONE_TASK:
            return {
                ...state,
                todos: state.todos.map(
                    (content, i) => content.id === action.payload.id ? {...content, done: action.payload.done}
                        : content
                )
            };
        default:
            return state;
    }
}