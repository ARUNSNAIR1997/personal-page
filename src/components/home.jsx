import React from "react";
import SideBar from "./sidebar";
import AboutPage from "./about";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./project";
import Contact from "./contact";
import Footer from "./footer";

function HomePage(){
    return(
        <>
        {/* <SideBar/>
        <section className="hero section dark-background">
        <img src="src/assets/img/hero.jpg" alt="" />
        <div className="contanier">
        <h2>Arun S Nair</h2>
        </div>
        </section>
        <AboutPage/> */}



<div className="d-flex flex-column flex-lg-row min-vh-100">
      {/* Sidebar */}
<div className="sidebar-container">
<SideBar />
</div>

      {/* Main Content */}
<div className="flex-fill main-content">
    <section id="hero" className="hero-section text-center text-white d-flex align-items-center justify-content-center position-relative">
          <img src="./public/img/6203606.jpg" alt="Hero" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"/>
            <div className="container position-relative py-5">
            <h1 className="display-4">Arun S Nair</h1>
            <p className="lead">MERN Stack Developer</p>
            <a href="src/assets/doc/arun.pdf"><button type="file">Resume</button></a>
            </div>
    </section>

<AboutPage />

<Skills/>

<Experience/>

<Projects/>

<Contact/>

<Footer/>
</div>
</div>
        </>
    )
}


export default HomePage