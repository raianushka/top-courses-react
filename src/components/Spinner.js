import React from "react";
import './Spinner.css';

const Spinner= () => {
    return(
        <div className="flex flex-col items-center sapce-y-2" >
            <div className="spinner"></div>
            <p className="text-blue-900 text-lg font-semibold">Loading...</p>
        </div>
        
    )
}

export default Spinner;