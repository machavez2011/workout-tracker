import React from 'react';

export default function AddUpdateModal(props) {
    return (
        <div className="modal fade" id="addUpdateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{props.id ? 'Update' : 'Add'} Category</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.clear}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" type="text" placeholder="Name" value={props.text} onChange={props.updateText} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.clear}>Cancel</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.save}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}