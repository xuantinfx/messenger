import { compose } from 'redux';
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import Auth from '../components/Auth'

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
        authSignUp: state.auth
    }
}

export default compose(firebaseConnect(), connect(mapStateToProps))(Auth)