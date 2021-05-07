import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUpdateModal from './addUpdate/addUpdateModal';

export default function Exercises() {
    const [allExercises, setExercises] = useState([]);
    const [allCategories, setCategories] = useState([]);

    useEffect(_ => getExercises(), [])

    const getExercises = async _ => {
        try {
            if(allCategories) {
                const categories = await axios.get('http://localhost:5000/api/categories/');
                setCategories(categories.data);
            }
            const exercises = await axios.get('http://localhost:5000/api/exercises/');
            setExercises(exercises.data);
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

            <AddUpdateModal type={'exercise'}/>
        </div>
    )
}