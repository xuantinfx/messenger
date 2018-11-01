import React, { Component } from 'react';
import HomePage from '../components/HomePage'
import { firebaseConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { beGinsignUpWithGoogle } from '../actions/auth'
import { compose } from 'redux';

class HomePageContainer extends Component {
    signUp() {
        this.props.firebase.login({ provider: 'google', type: 'popup' });
        this.props.signUp();
    }

    render() {
        return (
            <HomePage signUp={() => this.signUp()} auth={this.props.auth}/>
        );
    }
}

HomePageContainer.propTypes = {
    firebase: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signUp: () => {
            dispatch(beGinsignUpWithGoogle())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

export default compose(firebaseConnect(), connect(mapStateToProps, mapDispatchToProps))(HomePageContainer)