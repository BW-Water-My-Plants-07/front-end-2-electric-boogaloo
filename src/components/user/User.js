// USER PROFILE - NAME AND PHONE NUMBER
import React from "react";

const User = ( editUser ) => {
    const handleClick = (e) => {
        e.stopPropagation();
        editUser(user); //TODO
    }

    return (
        <div>
        <li>
            <span className="edit" onClick={handleClick}>📝&nbsp;</span>
            {`Username: ${user.username}`}
        </li>
        <li>
            <span className="edit" onClick={handleClick}>📝&nbsp;</span>
            {`Phone Number: ${user.phoneNumber}`}
        </li>
        </div>
    )
}

export default User;