import { signUpWithGoogleDone } from '../actions/auth'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signUpDone: () => {
            dispatch(signUpWithGoogleDone())
        }
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);