import { compose } from 'redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import mapPresenToUser from '../utilities/mapPresenToUser'
import Histories from '../components/Histories/Histories'
import { openChat } from '../actions/message'
import { markStarUser, unMarkStarUser} from '../actions/user'

const mapStateToProps = (state, ownProps) => {
    let { presence, sessions } = state.firebase.ordered;
    let { users, groups } = state.firestore.ordered;

    return {    
        users: mapPresenToUser(presence, sessions, users),
        groups: groups,
        auth: state.firebase.auth,
        stars: state.user.stars
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openChat: (user1, user2) => {
            dispatch(openChat(user1, user2))
        },
        markStarUser: (info) => {
            dispatch(markStarUser(info));
        },
        unMarkStarUser: (info) => {
            dispatch(unMarkStarUser(info));
        }
    }
}

export default compose(
    firebaseConnect(['presence', 'sessions']),
    firestoreConnect(['users', 'groups']),
    connect(mapStateToProps, mapDispatchToProps))(Histories)