import axios from 'axios';
import React, { useState } from 'react';

export default function AddCategories(props) {
    const [categoryName, setCategoryName] = useState('');

    const changeCategoryName = e => setCategoryName(e.target.value);

    const saveCategory = async _ => {
        try {
            await axios.post('http://localhost:5000/api/categories/add', { name: categoryName });
            props.refreshCategories();
        } catch(err) {
            alert(err);
        } finally {
            clearName();
        }
    }

    const clearName = _ => setCategoryName('');

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Add Category</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={clearName}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" type="text" placeholder="Name" value={categoryName} onChange={changeCategoryName} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearName}>Cancel</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={saveCategory}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}