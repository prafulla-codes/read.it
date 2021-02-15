import React from 'react';
import Navbar from '../../Components/Navbar';
import TotalBooksRead from '../../Components/TotalBooksRead';
const Dashboard = () => {

    return (
        <div>
            <Navbar/>
            Dashboard : <TotalBooksRead/>

        </div>
    )
}

export default Dashboard;