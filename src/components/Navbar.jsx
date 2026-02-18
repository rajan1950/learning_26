import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div>
            {/* <h1>Navbar Component</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/" style={{ color: "Red" }}>Netflix</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/netflixhome">Home <span className="sr-only">(current)</span></Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/netflixmovie">Movies</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/netflixshows">Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/netflixaccount">Account</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/netflixsports">Sports</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/functiondemo">Function Demo</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/usedemo1">UseState Demo 1</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/usedemo2">UseState Demo 2</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/usedemo3">UseState Demo 3</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                       
                       <li className="nav-item">
                            <Link className="nav-link" to="/inputdemo1">Input Demo 1</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/inputdemo2">Input Demo 2</Link>
                        </li>

                         <li className="nav-item">
                            <Link className="nav-link" to="/formdemo1">Form Demo 1</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formdemo2">Form Demo 2</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formdemo3">Form Demo 3</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formdemo4">Form Demo 4</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formdemo5">Form Demo 5</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formtask">Form Task</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formdemo6">Form Demo 6</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formdemo7">Form Demo 7</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formpasswordtask">Form Password Task</Link>
                        </li>

                          <li className="nav-item">
                            <Link className="nav-link" to="/tablecomponent">Table Component</Link>
                        </li> */}

                        <li className="nav-item">
                            <Link className="nav-link" to="/apidem1">API Demo 1</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/apidem2">API Demo 2</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/apidem3">API Demo 3</Link>
                        </li>

                         <li className="nav-item">
                            <Link className="nav-link" to="/apidem4">API Demo 4</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/apidem5">API Demo 5</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/apidemtask">API Demo Task</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/omdbsearch">OMDB Search</Link>
                        </li>


                       

                    </ul>

                </div>
            </nav>
        </div>
    )
}
