import ChatFrame from '../../components/AllChatFrame/ChatFrame';
import { connect } from 'react-redux'
import { sendMessage, closeChatBox, sendMessagePhoto, updateDomInput, onFocusChatFrame } from '../../actions/message';
import { markStarUser, unMarkStarUser} from '../../actions/user'

const mapStateToProps = (state, ownProps) => {
    return {
        stars: state.user.stars,
        sendingMessage: state.message.sendingMessage[ownProps.group.id] || []
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendMessage: (info) => {
            dispatch(sendMessage(info))
        },
        sendMessagePhoto: (info) => {
            dispatch(sendMessagePhoto(info));
        },
        closeChatBox: (groupId) => {
            dispatch(closeChatBox(groupId))
        },
        markStarUser: (info) => {
            dispatch(markStarUser(info));
        },
        unMarkStarUser: (info) => {
            dispatch(unMarkStarUser(info));
        },
        updateDomInput: (DOM, idGroup) => {
            dispatch(updateDomInput(DOM, idGroup));
        },
        onFocusChatFrame: (group, uid) => {
            dispatch(onFocusChatFrame(group, uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFrame)