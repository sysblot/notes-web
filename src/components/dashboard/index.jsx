import React from 'react';
import Header from '../header'
import SidePanel from '../sidePanel';
import Pad from '../pad';
import './style.css'

const Dashboard = function () {
    return <div className="dashboard"> 
        <Header />
        <SidePanel />
        <Pad />
    </div>
}

export default Dashboard;