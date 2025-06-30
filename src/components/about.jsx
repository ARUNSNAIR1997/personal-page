import React from "react";


function AboutPage(){
    return(
        <>
        <section id="about" className="about section">
        <div className="container section-title">
            <h2>About</h2>
            <p>Highly skilled MERN Stack Developer with experience in designing and developing robust web applications using MongoDB, Express.js, React.js, and Node.js. Adept at building scalable solutions, optimizing workflows, and integrating backend APIs with dynamic frontend interfaces. Passionate about problem-solving, debugging, and enhancing user experience.</p>
        </div>


        <div className="container pt-4">
        <div className="row gy-4 justify-content-center">
        {/* <div className="col-lg-4">
            <img src="src/assets/img/profile.jpg" alt="" className="img-fluid"/>
        </div> */}
        <div className="col-lg-8 content">
            {/* <h2>MERN Stack Developer</h2> */}
            {/* <p>Hello! I'm Arun S Nair, a self-taught and highly motivated MERN stack developer with a strong foundation in building responsive and dynamic web applications.</p> */}
            <div className="row">
            <div className="col-lg">
                <h3>Skills : -</h3>
                <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Frontend:</strong>  <span>HTML, CSS, JavaScript, React.js, Bootstrap</span> </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Backend:</strong>  <span>Node.js, Express.js</span> </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Database:</strong>  <span>MongoDB, Mongoose</span> </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Tools:</strong>  <span>GitHub, VSCode</span> </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Deployment:</strong>  <span>Netlify, Render</span> </li>
                </ul>
            </div>
            </div>
            {/* <p className="py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ea dolores in odit quos error, natus voluptate asperiores eum aliquam reiciendis sunt praesentium fuga, incidunt autem quaerat ipsa a quisquam?</p> */}
        </div>
        </div>
        </div>
        </section>
        </>
    )
}



export default AboutPage