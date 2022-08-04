import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import  Landing  from "./Landing"
import  All  from "./All"
import  Template  from "./Template"
import { ToastContainer, toast } from 'react-toastify';




 function NavBar  () {
    const toastok1 = () => toast.error('Gap yoq',{theme:'colored'})
    return(
            <Router>
                <div className="max-width">
                    <nav>
                        <div className="nav-logo">
                            <img src='img/nav.png' />
                            <img src="img/nav2.png" alt="" />
                        </div>
                        
                        <ul className="nav-item">
                            <li><NavLink to='/' activeclassname='selected'>Landing</NavLink></li>
                            <li><NavLink to='/all' activeclassname='selected'>All pages</NavLink></li>
                            <li><NavLink to='/templ' activeclassname='selected'>Template</NavLink></li>
                        </ul>

                        
                            <div className="first-btn">
                                <a href="#">Sign up</a>
                                <button className="first" onClick={() => toastok1()}><a href="">Purchase template</a></button>
                            </div>
                            <ToastContainer/>
                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/templ" element={<Template />} />
                </Routes>
            </Router>
            
           
    )
}
export default NavBar

