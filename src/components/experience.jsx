import React from "react";

function Experience(){
    return(
        <>
        <section id="experience" className="experience position-relative">
        <div className="container section-title">
            <h2>Experience</h2>
        </div>
        <div className="experienceDiv container display-flex">
            <h3>Full Stack MERN Developer</h3>
            <ul className="experience-list list-group">
                <li><i className="bi bi-chevron-right"></i> <strong>Logiprompt -</strong>  <span>2025 - Present</span> </li>
                <li><p>Completed a MERN Stack development course at Logiprompt Techno Solutions, where I gained practical knowledge in building dynamic full-stack web applications using MongoDB, Express.js, React.js, and Node.js. The training covered key areas such as RESTful API development, frontend and backend integration, database management, and application deployment. Worked on hands-on projects to strengthen real-world problem-solving and development skills.</p> </li>
            </ul>
        </div>
        <div className="experienceDiv container display-flex">
            <h3>Operations Engineer</h3>
            <ul className="experience-list list-group">
                <li><i className="bi bi-chevron-right"></i> <strong>6D Technologies -</strong>  <span>2021 - 2025</span> </li>
                <li><p>Experienced Operations Engineer with 3 years of expertise in troubleshooting, system monitoring, and Linux shell scripting. Responsible for monitoring project-related communications, identifying issues from emails, and creating support tickets to notify the appropriate teams. Proficient in developing and maintaining scripts for Nagios alerts, server status checks, automated alerts, error detection, and various other operational tasks. Skilled in resolving scripting issues and improving system reliability through automation.</p> </li>
            </ul>
        </div>
        {/* <div className="skills container display-flex">
            <h3>Full Stack MERN Developer</h3>
            <ul className="skill-list list-group">
                <li><i className="bi bi-chevron-right"></i> <strong>Logiprompt -</strong>  <span>Internship</span> </li>
                <li><p>Worked on their ERP system and implemented 3 major statistical dashboards for admin, sales and purchase. Implemented charts using apexcharts and other profile related tables and components along with other assigned work. Documented the project about setup and use, frontend and backend files containing folder structure and API guides.</p> </li>
            </ul>
        </div> */}
        </section>
        </>
    )
}

export default Experience