import './Home.css';

const Home = () => {
    return (
        <div className = "Home">
        <head>
            <h1>Street Starz</h1>
        </head>
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
                <h1>KidMilly's Personal Website</h1>
                <p>More content coming soon!</p>
            </div>
        </div>
    
        </body>
    </div> 
    )
};

export default Home;