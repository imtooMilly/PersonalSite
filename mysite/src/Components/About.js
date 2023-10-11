import './About.css';

const About = () => {
    return(
        <div className = "About">
        <body>
        <div class="banner">
            <div class="navbar">
                <img src={require ("./templogo.png")} class="logo"></img>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Other</a></li>
                </ul>
            </div>
                <div class="content">
                <h1>About</h1>
                <p>This personal website is one of my many projects that I am developing in order to learn more about ReactJS and web development.</p>
            </div>
        </div>
        </body>
    </div> 
    )
}

export default About;