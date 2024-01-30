import Navbar from './navbar';
import ProjectCards from './ProjectCards.js';

const Projects = () => {
    return(
        <body>
            <div className='header'>
                <div className="container">
                    <Navbar/>
                    <div className="header-text">
                        <h1>Projects</h1>
                    </div>
                    <ProjectCards/>
                    
                </div>
            </div>
        </body>
    )
};

export default Projects;