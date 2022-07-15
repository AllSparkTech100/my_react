import React from "react";
import Footer from "../../Footer/Footer"
import { Link } from "react-router-dom";
import "./Account.css"

const Settings = () => {
    return(
        
        <div className="ctn">
        <div className="grid-container">

        <header>
    <nav>
        <ul>
            <li>Account Settings</li>
            <li>Security</li>
            <li>Notification</li>
            <li>Trades</li>
            <li>My Coins</li>
        
            </ul>

    </nav>
        </header>


        <aside>

        <div className="img"><img src="./bit.jpg" alt=""/></div>


        <h3>USER NAME</h3>
        <p><Link to="">View Profile</Link></p>

        
        </aside>


        <main>
        <h1>This is where the Settings will appear after click</h1>
        </main>
        
        </div>
        <Footer/>
        </div>
        );
}

export default Settings