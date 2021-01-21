import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component"
import WorkoutSummary from "./components/workout-summary.component";
import EditWorkout from "./components/edit-workout.component";
import AddWorkout from "./components/add-workout.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={WorkoutSummary} />
        <Route path="/edit/:id" component={EditWorkout} />
        <Route path="/add" component={AddWorkout} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
