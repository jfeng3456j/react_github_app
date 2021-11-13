import React from 'react'
import PropTypes from 'prop-types'

const NavBar = (props) => {
    //destructure props
    const {title, icon} = props
    return (
            <nav className="navbar bg-primary">
                <h1><i className={icon} /> 
                  <span> </span>{title}</h1>
            </nav>
    )
    
}

NavBar.defaultProps = {
    title: "Github User Finder",
    icon: "fab fa-github "
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar
