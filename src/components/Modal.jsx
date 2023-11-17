import React from "react";
import "./Modal.css";
export const Modal = ({ closeModal }) => {
    return (
        <div className="modal-container" onClick={ closeModal }>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="Title">Title</label>
                        <input name = 'Title' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Category">Category</label>
                        <input name = 'Category' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Price">Price</label>
                        <input name = 'Price' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Image">Image Link</label>
                        <input name = 'Image Link' />
                    </div>
                    <button type="submit" className="sub">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}