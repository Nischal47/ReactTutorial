import React from "react";
import NavBar from "../../components/navBar";
import {authTypes} from "../../enums/authTypes";

const Login = () => {

    const authScreenType = authTypes.LOGIN

    return (
        <>
            <NavBar authScreenType={authScreenType}/>
        </>
    )
}

export default Login;
