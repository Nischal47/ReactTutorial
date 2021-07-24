import React from 'react';
import './navBar.css';
import Logo from "../logo";
import {authTypes} from "../../enums/authTypes";

const NavBar = (props) => {

    console.log(props)
    const {authScreenType} = props

    return (
        <section className='nav-bar'>
            <Logo/>
            <ul className='nav-links'>
                <li className='nav-link'><a href="#">Post a Job</a></li>
                <li className='nav-link'><a href="#">Find a Job</a></li>
                <li className='nav-link'><a href="#">Create Profile</a></li>
                <li className='nav-link'><a href="#">Review Project</a></li>
                <li className='nav-link'><a href="#">Learn</a></li>
                {
                    authScreenType === authTypes.LOGIN && <div className='btn btn-primary'>
                        Login
                    </div>
                }
                {
                    authScreenType === authTypes.SIGNUP && <div className='btn btn-secondary'>
                        SignUp
                    </div>
                }
            </ul>
        </section>
    );
}

export default NavBar;
