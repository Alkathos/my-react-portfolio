import React from "react";

const Navigation = ({handlePageChange}) => {
    return (
        <div>
            <nav style={{backgroundColor: "#222222"}}>
                <div className="nav-wrapper navbar">
                <a href="#home" 
                onClick={()=> handlePageChange('Home')} 
                className="brand-logo">
                Fernando Zaldivar
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a href='#home'
                        onClick={()=> handlePageChange('Home')}>
                        Home    
                        </a>
                    </li>
                    <li>
                        <a href="#about"
                        onClick={()=> handlePageChange('About')}>
                        About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio"
                        onClick={()=> handlePageChange('Portfolio')}>
                        Portfolio</a>
                    </li>
                    <li>
                        <a href="#resume"
                        onClick={()=> handlePageChange('Resume')}>
                        Resume</a>
                    </li>
                    <li>
                        <a href="#contact"
                        onClick={()=> handlePageChange('Contact')}>
                        Contact</a>
                    </li>
                </ul>
                </div>
             </nav>
        </div>
    )
}

export default Navigation;