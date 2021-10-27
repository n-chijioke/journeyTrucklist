import React from 'react'
import "./Dashboard.css";
import Group from "../components/images/Group.png";
import Group2 from "../components/images/Group2.png";
import SearchIcon from '@material-ui/icons/Search';


function Dashboard() {

    return (
       
        <div className="dashboard__container">
            
                <div className="dashboard__cards">
                        <div className="cards">
                            <h1  className="h1">428</h1>
                            <h2 className="h2">Installed Trucks</h2>
                            <img src={Group} alt=" "/>
                        </div>
                        <div className="cards">
                            <h1 className="h1">428</h1>
                            <h2 className="h2">Sabotage</h2>
                            <img className="img" src={Group2} alt=" "/>
                        </div>
                        <div className="cards">
                            <h1  className="h1">02</h1>
                            <h2 className="h2">Violation Score</h2>
                            <img src={Group2} alt=" "/>
                        </div>

                    <hr/>

                </div> 
                
                
        </div>
    );
}

export default Dashboard;
