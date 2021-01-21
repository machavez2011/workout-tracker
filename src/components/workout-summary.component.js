import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import axios from 'axios';

const Workout = props => (
    <tr>
        <td>{props.workout.username}</td>
        <td>{props.workout.description}</td>
        <td>{props.workout.duration}</td>
        <td>{props.workout.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.workout._id}><button className='btn btn-primary'>edit</button></Link> | <button className='btn btn-danger' onClick={() => { props.deleteWorkout(props.workout._id) }}>delete</button>
        </td>
    </tr>
)

export default class WorkoutSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        }
        this.getAllWorkouts = this.getAllWorkouts.bind(this);
        this.deleteWorkout = this.deleteWorkout.bind(this);
        this.workoutList = this.workoutList.bind(this);
    }

    componentDidMount() {
        this.getAllWorkouts();
    }
    
    getAllWorkouts() {
        axios.get('http://localhost:5000/api/workouts/')
        .then(res => {
            this.setState({
                workouts: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteWorkout(id) {
        axios.delete(`http://localhost:5000/api/workouts/${id}`)
            .then(res => console.log(res.data))
        
        this.setState({
            workouts: this.state.workouts.filter(workout => workout._id !== id)
        })
    }

    workoutList() {
        return this.state.workouts.map((currentworkout) => {
            return <Workout workout={currentworkout} deleteWorkout={this.deleteWorkout} key={currentworkout._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Workout Summary</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.workoutList()}
                    </tbody>
                </table>
            </div>
        )
    }
}