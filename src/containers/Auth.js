import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import Auth from '../components/Auth'
import PropTypes from 'prop-types';

class AuthContainer extends Component {
    render() {
        return <Auth auth={this.props.auth}/>
    }
}

AuthContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
};

export default compose(firebaseConnect(), connect(({firebase: {auth}}) => ({auth})))(AuthContainer)