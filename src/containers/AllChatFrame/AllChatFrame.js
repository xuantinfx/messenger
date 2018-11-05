import AllChatFrame from '../../components/AllChatFrame/AllChatFrame'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import mapPresenToUser from '../../utilities/mapPresenToUser'
import { loadStars } from '../../actions/user'

const mapStateToProps = (state, ownProps) => {
    let { presence, sessions } = state.firebase.ordered;
    let { users } = state.firestore.ordered;
    return {
        groups: state.firestore.ordered.groups,
        auth: state.firebase.auth,
        users: mapPresenToUser(presence, sessions, users),
        listOpenChat: state.message.listChatBox,
        stars: state.user.stars
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadStars: (stars) => {
            dispatch(loadStars(stars))
        }
    }
}

export default compose(firestoreConnect(['groups', 'users']), connect(mapStateToProps, mapDispatchToProps))(AllChatFrame)