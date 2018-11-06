import MiniMap from '../components/MiniMap/MiniMap'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { closeChatBox } from '../actions/message'

const mapStateToProps = (state, ownProps) => {
    return {
        listChatBox: state.message.listChatBox,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users,
        listDomInput: state.message.listDomInput
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeChatBox: (groupId) => {
            dispatch(closeChatBox(groupId))
        }
    }
}

export default compose(firestoreConnect(['users']),connect(mapStateToProps, mapDispatchToProps))(MiniMap);