import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/navbar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-logout" onClick={this.props.logout}>
                    <p>Logout</p>
                </div>
                <div className="navbar-user">
                    <div className="navbar-name"><p>{this.props.auth.displayName}</p></div>
                    <img src={this.props.auth.photoURL} alt="avt" className="navbar-avt"/>
                </div>
            </div>
        );
    }
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

export default NavBar;