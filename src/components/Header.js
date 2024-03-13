import { useState,useEffect } from "react";
import  {LOGO_URL}  from "../../utils/constant";
import {Link} from "react-router-dom"


const Header = ()=>{

    // let btnName = "Login";

    const [btnName,setbtnName] = useState(["Login"]);

    useEffect(()=>{
        console.log("useEffect called");
    },[btnName])

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src = {LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=> 
                        btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                    }>{btnName}
                        </button>
                </ul>
            </div>

        </div>
    );
};

export default Header;