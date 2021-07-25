import React from "react";
import NavBar from "../../components/navBar";
import {authTypes} from "../../enums/authTypes";
import AuthForm from "../../components/AuthForm";

const Login = () => {

    const authScreenType = authTypes.LOGIN

    return (
        <div className='login'>
            <NavBar authScreenType={authScreenType}/>
            <AuthForm/>
        </div>
    )
}

export default Login;
