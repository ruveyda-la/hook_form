import React, { useState } from 'react';

const UserForm = (props) => {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {userFirstName,userLastName,userEmail,userPassword,userConfirmPassword};
        console.log(newUser)
        setUserFirstName("");
        setUserLastName("");
        setUserEmail("");
        setUserPassword("");
        setUserConfirmPassword("");
    };
  return (
    <div>
        <div>
        <h4>Registration Form</h4>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name:</label> 
                <input type="text" value={userFirstName} onChange={ (e) => setUserFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name:</label> 
                <input type="text" value={userLastName} onChange={ (e) => setUserLastName(e.target.value) } />
            </div>
            <div>
                <label>Email:</label> 
                <input type="text" value={userEmail} onChange={ (e) => setUserEmail(e.target.value) } />
            </div>
            <div>
                <label>Password:</label> 
                <input type="password" value={userPassword} onChange={ (e) => setUserPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password:</label> 
                <input type="password" value={userConfirmPassword} onChange={ (e) => setUserConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
        <div>
            <h4>Your Form Data</h4>
            <h5>First Name:{userFirstName}</h5>
            <h5>Last Name:{userLastName}</h5>
            <h5>Email:{userEmail}</h5>
            <h5>Password: {userPassword}</h5>
            <h5>Confirm Password:{userConfirmPassword}</h5>
        </div>
    </div>
  );
};

export default UserForm;