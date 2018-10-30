import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from '../containers/HomePage'
import DashBoard from '../components/Dashboard'
import Loading from '../components/Loading'
import { isLoaded } from 'react-redux-firebase'

class Auth extends Component {
    render() {
        if(!isLoaded(this.props.auth)) {
            return <Loading/>
        }

        if(this.props.auth) {
            if(this.props.auth.uid) {
                return <DashBoard/>
            }
        }
        return <HomePage/>
    }
}

Auth.propTypes = {
    auth: PropTypes.object.isRequired
};

export default Auth;