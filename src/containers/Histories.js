import { compose } from 'redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import mapPresenToUser from '../utilities/mapPresenToUser'
import Histories from '../components/Histories/Histories'
import { openChat } from '../actions/message'

const mapStateToProps = (state, ownProps) => {
    let { presence, sessions } = state.firebase.ordered;
    let { users } = state.firestore.ordered;

    return {    
        users: mapPresenToUser(presence, sessions, users),
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openChat: (user1, user2) => {
            dispatch(openChat(user1, user2))
        }
    }
}

export default compose(
    firebaseConnect(['presence', 'sessions']),
    firestoreConnect(['users']),
    connect(mapStateToProps, mapDispatchToProps))(Histories)