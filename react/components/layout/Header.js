import React, {Component} from 'react';

class Header extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        Simple Todo List
                    </a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" style={{cursor: "pointer"}} onClick={this.props.addtodo}>
                                    <i className="fas fa-plus"/> ADD
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Header;
