import React from 'react';
import AllTypes from './types/index';

export default function AddUpdateModal(props) {
    return (
        <div className="modal fade" id="addUpdateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                { AllTypes(props)[props.type] }
            </div>
        </div>
    )
}