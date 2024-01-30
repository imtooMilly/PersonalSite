import './ProjectCards.css';
import React from 'react'
import {Link} from 'react-router-dom';

const ProjectCards = () => {
    return(
        <div className='card-container'>
            <div className='card'>
                <h3>Nize</h3>
                <p>a Calendar app, to-do list, and file storage all in one, what more could a student want?</p>
                <button className='visit-btn'><Link to='/'>Visit</Link></button>
            </div>
            <div className='card'>
                <h3>Web Application</h3>
                <p>Will be developed this semester</p>
                <button><Link to='/'>Visit</Link></button>
            </div>
            <div className='card'>
                <h3>Title</h3>
                <p>description</p>
                <button><Link to='/'>Visit</Link></button>
            </div>
        </div>
    )
};

export default ProjectCards;