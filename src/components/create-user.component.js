import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            allUsers: []
        }

        this.getAllUsers = this.getAllUsers.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers() {
        axios.get('http://localhost:5000/users/')
        .then(res => this.setState({allUsers: res.data}))
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        const newUser = {
            username: this.state.username
        }

        console.log(newUser);

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })

        this.getAllUsers();
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>

                <div>
                    <ul>
                        {this.state.allUsers.map((user)=> {
                            return <li key={user._id}>{user.username}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}