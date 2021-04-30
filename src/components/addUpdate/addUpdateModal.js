import React from 'react';
import CategoryModal from './category';
import ExerciseModal from './exercise';

export default function AddUpdateModal(props) {
    return (
        <div className="modal fade" id="addUpdateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                {
                    {
                        'category': <CategoryModal props={props} />,
                        'exercise': <ExerciseModal props={props} />
                    } [props.type]
                }                
            </div>
        </div>
    )
}