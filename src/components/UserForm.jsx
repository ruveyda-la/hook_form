import React, { useState } from 'react';

const UserForm = (props) => {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {userFirstName,userLastName,userEmail,userPassword,userConfirmPassword};
        console.log(newUser)
        setUserFirstName("");
        setUserLastName("");
        setUserEmail("");
        setUserPassword("");
        setUserConfirmPassword("");
        setHasBeenSubmitted( true );
    };
  return (
    <div>
        <div>

        <h3>Registration Form</h3>
        <form onSubmit={ createUser }>
            {hasBeenSubmitted?
            <h4>Thank you for submitting the form!</h4> :
            <h4>Welcome,please submit the form.</h4>
            }
            <div>
                <label>First Name:</label> 
                <input type="text" value={userFirstName} onChange={ (e) => setUserFirstName(e.target.value) } />
                {userFirstName.length>0 && userFirstName.length<2 ?(
                    <p>First name must be at least 2 characters.</p>
                ): null}
            </div>
            <div>
                <label>Last Name:</label> 
                <input type="text" value={userLastName} onChange={ (e) => setUserLastName(e.target.value) } />
                {userLastName.length>0 && userLastName.length<2 ?(
                    <p>Last name must be at least 2 characters.</p>
                ): null}
            </div>
            <div>
                <label>Email:</label> 
                <input type="text" value={userEmail} onChange={ (e) => setUserEmail(e.target.value) } />
                {userEmail.length>0 && userEmail.length<10 ?(
                    <p>Email must be at least 10 characters.</p>
                ): null}
            </div>
            <div>
                <label>Password:</label> 
                <input type="password" value={userPassword} onChange={ (e) => setUserPassword(e.target.value) } />
                {userPassword.length>0 && userPassword.length<8 ?(
                    <p>Password must be at least 8 characters.</p>
                ): null}
            </div>
            <div>
                <label>Confirm Password:</label> 
                <input type="password" value={userConfirmPassword} onChange={ (e) => setUserConfirmPassword(e.target.value) } />
                {userConfirmPassword !== userPassword ? (<p>Passwords does not match.</p>
                ): null}
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