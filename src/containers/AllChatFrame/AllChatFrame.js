import AllChatFrame from '../../components/AllChatFrame/AllChatFrame'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import mapPresenToUser from '../../utilities/mapPresenToUser'

const mapStateToProps = (state, ownProps) => {
    let { presence, sessions } = state.firebase.ordered;
    let { users } = state.firestore.ordered;

    return {
        groups: state.firestore.ordered.groups,
        auth: state.firebase.auth,
        users: mapPresenToUser(presence, sessions, users),
        listOpenChat: state.message.listChatBox
    }
}

export default compose(firestoreConnect([{collection: 'groups'}]), connect(mapStateToProps))(AllChatFrame)