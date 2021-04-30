import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUpdateModal from './addUpdateModal';

export default function Exercises() {
    const [allExercises, setExercises] = useState([]);

    useEffect(_ => getExercises(), [])

    const getExercises = async _ => {
        try {
            const res = await axios.get('http://localhost:5000/api/exercises/');
            setExercises(res.data);
        } catch(err) {
            alert(err);
        }
    }

    return (
        <div>
            {allExercises.map(exercise => {
                return <li key={exercise._id}>{exercise.name}</li>;
            })}

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUpdateModal">
                Add
            </button>

            <AddUpdateModal />
        </div>
    )
}