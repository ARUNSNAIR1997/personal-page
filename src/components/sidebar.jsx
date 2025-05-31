import React, {useState} from "react";


function SideBar(){

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  

  const handleNavClick = () => {
    setIsOpen(false); // Close sidebar when a link is clicked
  };

  
    return(
        <>
        <header id="header" className={`header dark-background d-flex flex-column ${isOpen ? "show" : ""}`}>
          {/* <i className="header-toggle d-xl-none bi bi-list"></i> */}
          {/* Toggle button */}
      <i
  className={`header-toggle d-xl-none ${isOpen ? "bi bi-x" : "bi bi-list"}`}
  onClick={toggleSidebar}
></i>
          <div className="profile-img">
            <img src="/img/profile.jpg" alt="" className="img-fluid rounded-circle"/>
          </div>

          <a href="/home" className="logo">
          <h1 className="sitename">Arun S Nair</h1>
          </a>

          <div className="social-links text-center">
            <a href="https://www.linkedin.com/in/arun-s-nair-5277bb161" className="linkedin"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.facebook.com/share/19KiBUh9o5/" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/kannan__nair___?igsh=MXVwYTdhMHdoYXdtcg==" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://github.com/ARUNSNAIR1997" className="github"><i className="bi bi-github"></i></a>
          </div>

          <nav className="navmenu">
            <ul>
              <li><a href="#hero" onClick={handleNavClick}><i className="bi bi-house navicon"></i>Home</a></li>
              <li><a href="#about" onClick={handleNavClick}><i className="bi bi-person navicon"></i>About</a></li>
              <li><a href="#education" onClick={handleNavClick}><i className="bi bi-file-earmark-text navicon"></i>Education</a></li>
              <li><a href="#experience" onClick={handleNavClick}><i className="bi bi-images navicon"></i>Experience</a></li>
              <li><a href="#project" onClick={handleNavClick}><i className="bi bi-hdd-stack navicon"></i>Project</a></li>
              <li><a href="#contact" onClick={handleNavClick}><i className="bi bi-envelope navicon"></i>Contact</a></li>
            </ul>
          </nav>
        </header>
        </>
    )
}


export default SideBar