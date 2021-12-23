import React from "react";

const Alert = ({children}) => {
    return (
        <div>
            <div className="text-center my-5 text-red-600">{children}</div>
        </div>
    );
};

export default Alert;
