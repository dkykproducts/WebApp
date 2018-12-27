import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light orange">
            <div className="container">
                <a className="navbar-brand" href="/">DKYKproducts</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
               
                <div className="form-inline my-2 my-lg-0 ml-auto">
                    <ul className="nav navbar-nav">
                        <li className="mr-2"><a href="/" className="text-white nav-option">Home</a></li>
                        <li className="mr-2"><Link to="/" className="text-white nav-option">LogIn</Link></li>
                        <li className="mr-2"><Link to="/" className="text-white nav-option">SignUp</Link></li>
                        <li className="mr-2"><NavLink to="/ContactUs" className="text-white nav-option">Contact Us</NavLink></li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
        </div>

    )
}

export default Navbar;