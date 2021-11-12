import React, { Component } from 'react'
import PropTypes from 'prop-types'


class NavBar extends Component {

    static defaultProps = {
        title: "Github user finder",
        icon: "fab fa-github"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1><i className={this.props.icon} />
                     {this.props.title}</h1>
            </nav>
        )
    }
}

export default NavBar