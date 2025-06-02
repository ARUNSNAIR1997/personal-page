import React from "react";

function Projects(){
    return(
        <>
        <section id="project" className="project light-background">
        <div className="container section-title">
            <h2>My Projects</h2>
        </div>
        <div className="row container-fluid">
        <div className="col-lg-6">
        <div className="card">
        <img src="/img/ecommerce.png" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">E-Commerce Shopping Website</h5>
                <p className="card-text">Developed a full-featured dynamic online shopping website using Express-generator</p>
                <a href="#"><img src="/img/git.png" alt="" /></a>
            </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="card">
        <img src="/img/hospital.png" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Hospital Website</h5>
                <p className="card-text">Developed a static website using MERN Stack.</p>
                <a href="#"><img src="/img/git.png" alt="" /></a>
            </div>
        </div>
        </div>
        
        </div>

        <div className="row container mt-4">
<div className="col-lg-6">
        <div className="card">
        <img src="/img/travel.png" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Travel Website</h5>
                <p className="card-text">Developed a static website using react.js.</p>
                <a href="#"><img src="/img/git.png" alt="" /></a>
            </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="card">
        <img src="/img/swiggy.png" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Swiggy title</h5>
                <p className="card-text">Developed a static website using HTML, CSS, Bootstrap.</p>
                <a href="https://github.com/ARUNSNAIR1997/food_website.git"><img src="/img/git.png" alt="" /></a>
            </div>
        </div>
        </div>
        </div>

        </section>
        </>
    )
}


export default Projects