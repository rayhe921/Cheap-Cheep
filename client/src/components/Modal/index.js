import React from "react";
import "./style.css";



function Modal(prop) {
    const showHideClassName = prop.showModalOne || prop.showModalTwo ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{prop.title}</h5>
                        <button type="button" className="close" onClick={prop.hideModal} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {prop.body}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={prop.hideModal} data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;