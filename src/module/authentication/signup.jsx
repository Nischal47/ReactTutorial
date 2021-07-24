import React from "react";
import NavBar from "../../components/navBar";
import {authTypes} from "../../enums/authTypes";

const Signup = () => {

    const authScreenType = authTypes.SIGNUP

    return (
        <>
            <NavBar authScreenType={authScreenType}/>
        </>
    )
}

export default Signup;
