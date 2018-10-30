import React, { Component } from 'react';
import HomePage from '../components/HomePage'
import { firebaseConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types';

class HomePageContainer extends Component {
    login() {
        this.props.firebase.login({ provider: 'google', type: 'popup' });
    }

    render() {
        return (
            <HomePage login={() => this.login()}/>
        );
    }
}

HomePageContainer.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default firebaseConnect()(HomePageContainer)