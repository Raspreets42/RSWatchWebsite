import React from 'react';
import '../App.css';
import image from '../raspreet.jpg';

export default function About() {
    return (
        <>
            <div className="container text-center my-4">
                <h1 id="heading">Welcome to <span className="badge rounded-pill bg-danger">RS Watch</span> </h1>
            </div>
            <div className="about ">
            <div className="texted">
                <h1 className="my-2 text-center">About</h1>
                <hr />
                <h5 className="text-center">"Time is the most valuable thing a human can spend."</h5>
                <br />
                
                <p>A <b>Watch</b> is a portable timepiece.Watches were developed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. Watches are the great invension which lets us to know that time never waits for anyone.</p>
                <br />
                
                <h6>Mr. Raspreet Singh Pasrija words :</h6>
                
                <p> I had made this <b><i> The RS Watch Website </i></b> which is full responsive and its timing is accurate and tells time is format hh:mm:ss with AM / PM .It also tells the date in format MM/dd/yyyy. I made this Website just only in 2 hours only.</p>
                <br />
                
                <p><b><i> About Me :</i></b><br /> I'm a <b><i> BE 3<sup>rd</sup> year student</i></b> studying <b>Computer Science Engineering</b> at <b>Rungta College of Engineering and Technology , Bhilai.</b> I like Programmings and will soon start an Bloging on the Programmings. </p>

                <div className="text-center my-4 crdspace ">
                    <div className="card crd">
                        <img src={image} className="card-img-top" alt="Not Found" />
                        <div className="card-body">
                            <h5 className="card-title crdhead"><span className="badge bg-success">Raspreet Singh Pasrija</span></h5>
                            <h5 className="card-text crdhead" >Designed <b><i> The RS Watch Website</i></b></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item crdli"><b>Age : </b>21</li>
                            <li className="list-group-item crdli"><b>Education: </b>Bachelor of Engineering</li>
                            <li className="list-group-item crdli"><b>Project: </b>RS Watch Website</li>
                            <li className="list-group-item crdli"><b>Library : </b>ReactJs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
