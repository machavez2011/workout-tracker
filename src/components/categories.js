import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUpdateModal from './addUpdateModal';

export default function Categories() {
    const [allCategories, setCategories] = useState([]);
    const [categoryID, setCategoryID] = useState(null);
    const [categoryName, setCategoryName] = useState('');

    useEffect(_ => getCategories(), [])

    const changeCategoryName = e => setCategoryName(e.target.value);

    const clearInfo = _ => {
        setCategoryName('');
        setCategoryID(null)
    }

    const getCategories = async _ => {
        try {
            const res = await axios.get('http://localhost:5000/api/categories/');
            setCategories(res.data);
        }
        catch (err){
            alert(err);
        }
    }

    const getCategoryByID = async e => {
        let id = e.target.parentNode.id;
        setCategoryID(id);
        
        try {
            const { data } = await axios.get(`http://localhost:5000/api/categories/${id}`);
            setCategoryName(data.name);
        } catch(err) {
            alert(err);
        }
    }

    const saveCategory = async _ => {
        try {
            if(categoryID) {
                await axios.post(`http://localhost:5000/api/categories/update/${categoryID}`, { name: categoryName })
            } else {
                await axios.post('http://localhost:5000/api/categories/add', { name: categoryName });
            }
            getCategories();
        } catch(err) {
            alert(err);
        } finally {
            clearInfo();
        }
    }

    return (
        <div>
            <ul>
                {allCategories.map(category => {
                    return (
                        <li key={category._id} id={category._id}>
                            {category.name}
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#addUpdateModal" onClick={getCategoryByID}>
                                Edit
                            </button>
                        </li>
                    )
                })}
            </ul>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUpdateModal">
                Add
            </button>

            <AddUpdateModal 
                id={categoryID}
                text={categoryName}
                updateText={changeCategoryName}
                save={saveCategory}
                clear={clearInfo}
            />
        </div>
    );
}