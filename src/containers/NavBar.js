import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import NavBar from '../components/NavBar'
import PropTypes from 'prop-types';

class NavBarContainer extends Component {
    logout() {
        this.props.firebase.logout();
    }
    render() {
        return (
            <NavBar auth={this.props.auth} logout={() => this.logout()}/>
        );
    }
}

NavBarContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
};

export default compose(firebaseConnect(), connect(({firebase: {auth}}) => ({auth})))(NavBarContainer)