import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {

    // Themes button state
    return (
        <div>

            {/* Dark Mode Only */}

            {/* <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : '#F6F6F6' }} >
                <div className="container-fluid" >
                    <a className="navbar-brand" style={{ color: props.mode === 'dark' ? '#FFF6E0' : 'black' }} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: props.mode === 'dark' ? '#FFF6E0' : 'black' }} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: props.mode === 'dark' ? '#FFF6E0' : 'black' }} aria-current="page" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                    </div>

                    
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
                    </div>

                </div>
            </nav> */}




            {/* Themes Here */}

            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.NavbarBG }}>
                <div className="container-fluid" >
                    <a className="navbar-brand" style={{ color: props.NavbarText }} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: props.NavbarText }} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: props.NavbarText }} aria-current="page" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                    </div>


                    <div className="dropdown me-4">
                        <button className="btn btn-dark dropdown-toggle" style={{ backgroundColor: props.BGColor, color: props.TextColor }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Themes
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark  dropdown-menu-end" style={{ backgroundColor: props.BGColor }} >
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Pastel") }} href="/">Pastel</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Vintage") }} href="/">Vintage</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Neon") }} href="/">Neon</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Light") }} href="/">Light</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Dark") }} href="/">Dark</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Earth") }} href="/">Earth</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Cold") }} href="/">Cold</button></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Space") }} href="/">Space</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" style={{ color: props.TextColor }} onClick={() => { props.ChangeTheme("Default") }} href="/">Default</button></li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )
}


Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//     title : "Set title here!",
//     aboutText : "About Text Here!"
// }