import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Workout Summary</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Add Workout</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/categories" className="nav-link">Categories</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/exercises" className="nav-link">Exercises</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}