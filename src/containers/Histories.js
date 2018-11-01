import { compose } from 'redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import mapPresenToUser from '../utilities/mapPresenToUser'
import Histories from '../components/Histories/Histories'

const mapStateToProps = (state, ownProps) => {
    let { presence, sessions } = state.firebase.ordered;
    let { users } = state.firestore.ordered;

    return {    
        users: mapPresenToUser(presence, sessions, users),
        auth: state.firebase.auth
    }
}

export default compose(
    firebaseConnect(['presence', 'sessions']),
    firestoreConnect(['users']),
    connect(mapStateToProps))(Histories)