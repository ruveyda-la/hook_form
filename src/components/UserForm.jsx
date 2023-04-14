import React, { useState } from 'react';

const UserForm = () => {
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        hasBeenSubmitted:false
})

    const [allUsers,setAllUsers] = useState([]);

    const changeHandler = (e) => {
        setUser ({
            ...user,
            [e.target.name]:e.target.value
        })    
    };
    const submitHandler = (e) => {
        e.preventDefault();
        user.hasBeenSubmitted=true
        setAllUsers([...allUsers, user]);

    }
  return (
    <div>
        <div>

        <h3>Registration Form</h3>
        <form onSubmit={ submitHandler }>
            {user.hasBeenSubmitted?
            <h4>Thank you for submitting the form!</h4> :
            <h4>Welcome,please submit the form.</h4>
            }
            <div>
                <label>First Name:</label> 
                <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                {user.firstName.length>0 && user.firstName.length<2 ?(
                    <p>First name must be at least 2 characters.</p>
                ): null}
            </div>
            <div>
                <p></p><br/>
                <label>Last Name:</label> 
                <input type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
                {user.lastName.length>0 && user.lastName.length<2 ?(  
                    <p>Last name must be at least 2 characters.</p>   
                ): null}
            </div>
            <div>
                <label>Email:</label> 
                <input type="text" name="email" value={user.email} onChange={changeHandler} />
                {user.email.length>0 && user.email.length<10 ?(
                    <p>Email must be at least 10 characters.</p>
                ): null}
            </div>
            <div>
                <label>Password:</label> 
                <input type="password" name="password" value={user.password} onChange={changeHandler} />
                {user.password.length>0 && user.password.length<8 ?(
                    <p>Password must be at least 8 characters.</p>
                ): null}
            </div>
            <div>
                <label>Confirm Password:</label> 
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                {user.confirmPassword !== user.password ? (<p>Passwords does not match.</p>
                ): null}
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
        <div>
            <h4>Your Form Data</h4>
            <h5>First Name:{user.firstName}</h5>
            <h5>Last Name:{user.lastName}</h5>
            <h5>Email:{user.email}</h5>
            <h5>Password: {user.password}</h5>
            <h5>Confirm Password:{user.confirmPassword}</h5>
        </div>
    </div>
  );
};

export default UserForm;