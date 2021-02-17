import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCategories from './addCategories';

export default function Categories() {
    const [allCategories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    async function getCategories() {
        try {
            let res = await axios.get('http://localhost:5000/api/categories/');
            setCategories(res.data);
        }
        catch (err){
            alert(err);
        }
    }

    return (
        <div>
            <ul>
                {allCategories.map(category => {
                    return <li key={category._id}>{category.name}</li>
                })}
            </ul>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Add
            </button>

            <AddCategories refreshCategories={getCategories} />
        </div>
    );
}