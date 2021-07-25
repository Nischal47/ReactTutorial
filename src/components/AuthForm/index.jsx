import React, {useState} from 'react';
import {userRoles} from "../../enums/userRoles";

const AuthForm = (props) => {

    const initialValue = {
        email: '',
        password: '',
        role: ''
    }

    const [authForm, setAuthForm] = useState(initialValue);
    const [showPassword,setShowPassword] =useState(false);

    const onchangeHandler = (event) => {
        setAuthForm({
            ...authForm,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // alert(`${authForm.email} of password ${authForm.password} of role ${authForm.role} is logged in`)
    }

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }

    console.log(showPassword)

    return (
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <div className='input-group'>
                    <div className='icon'><img src="../../assets/images/Mail.png" alt=""/></div>
                    <div className='input-box'>
                        <input type="text" placeholder='Email Id' name='email' value={authForm.email}
                               onChange={onchangeHandler}/>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='icon'><img src="../../assets/images/Password.png" alt=""/></div>
                    <div className='input-box'>
                        <input type={!showPassword ? 'password' : 'text' } placeholder="Password" name='password' value={authForm.password}
                               onChange={onchangeHandler}/>
                        <div className='show-password' onClick={showPasswordHandler}>show Password</div>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='icon'><img src="../../assets/images/Roles.png" alt=""/></div>
                    <div className='input-box'>
                        <select name='role' value={authForm.role} onChange={onchangeHandler}>
                            <option value={userRoles.EMPLOYEE}>{userRoles.EMPLOYEE}</option>
                            <option value={userRoles.EMPLOYER}>{userRoles.EMPLOYER}</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
    )

};

export default AuthForm;
