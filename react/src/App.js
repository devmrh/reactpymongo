import React, {Component} from "react";
import Header from "../components/layout/Header";
import Todo from "../components/todo/Todos";
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {

    state = {
        show: false
    };
    handleClick = () => {
        this.setState({
            show: !this.state.show
        });

    };

    render() {
        return (
            <Provider store={store}>
            <div className="App">
                <Header addtodo={this.handleClick}/>
                <Todo showtodoform={this.state.show} />
            </div>
            </Provider>
        );
    }
}

export default App;
