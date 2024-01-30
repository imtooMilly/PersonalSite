import './Home.css';
import Navbar from './navbar.js'


const Home = () => {
    return (
        <div className = "Home">
        <body>

            <div className='header'>
                <div className="container">
                    <Navbar/>
                    <div className="header-text">
                        <p>UI Desginer</p>
                        <h1>Hello, My name is <span>Milton Morris</span> <br></br> Welcome to my Online Portfolio!</h1>
                    </div>
                </div>
            </div>

            <div className='about'>
                <div className='container'>
                    
                        <div className='description'>
                            <h1 class="subtitle">About Me</h1>
                            <p>
                            Computer Science B.S | University at Buffalo Student <br></br>
                            <br></br>
                            Hello there! My name is Milton, 
                            a student currently pursuing a degree in Computer Science at the University at Buffalo. 
                            I find my true joy at the intersection of gaming, programming, and problem-solving. 
                            As a fervent gamer, coding enthusiast, and creative problem solver, 
                            I'm on a mission to fuse my passions into meaningful tech solutions. 
                            I am interested in looking into machine learning, software engineering, 
                            and cybersecurity for future career paths. 
                            My skill set includes proficiency in languages such as JavaScript, Python, and C, 
                            as well as experience with web development technologies like HTML, CSS, and ReactJS, 
                            and even experience with MySQL and PHP.</p>
                        </div>

                        <section class="features" id="features">
                        <div class="feature">
                            <h3>Skills</h3>
                            <br></br>
                            <ul>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>C</li>
                                <li>Lua</li>
                                <li>C#</li>
                                <li>PHP</li>
                                <li>ReactJS</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div class="feature">
                            <h3>Education</h3>
                            <br></br>
                            <p>Univeristy at Buffalo <br></br>
                                relevant coursework:
                            </p>
                        </div>
                        <div class="feature">
                            <h3>Experience</h3>
                            <br></br>
                            <p> Work in Progress</p>
                        </div>
                    </section>
                            
                
                </div>
            </div>
                
        </body>
    </div> 
    )
};

export default Home;