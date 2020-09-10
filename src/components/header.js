import React from "react";

export default function Button() {

   function handleChange (e) {
        window.location.reload();
    }

    return (
        <div className="btnDiv">
            <button type="button" onClick={handleChange} className="btn btn-outline-dark custBtn">Battle!</button>
        </div>
    )
}
