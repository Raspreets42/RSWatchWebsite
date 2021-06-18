import React, { useState } from 'react'
import '../App.css';

export default function Watch() {
    let currentDate = new Date().toLocaleDateString();
    let currentTime = new Date().toLocaleTimeString();
    
    const [CTime , setCTime] = useState(currentTime);
    const UpdateTime = () => {
        let currentTime = new Date().toLocaleTimeString();
        setCTime(currentTime);
    }
    setInterval(UpdateTime , 1000);
    return (
        <>
            <div className="container text-center my-4">
                <h1 id="heading">Welcome to <span className="badge rounded-pill bg-danger">RS Watch</span> </h1>
            </div>
            <div className="container shape my-4">
                <div className="circle">
                    <h2 id="mytime">{CTime}</h2>
                    <h6 id="mydate">{currentDate}</h6>
                </div>
            </div>
        </>
    )
}
