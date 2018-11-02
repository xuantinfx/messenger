import ChatFrame from '../../components/AllChatFrame/ChatFrame';
import { connect } from 'react-redux'
import { sendMessage, closeChatBox, sendMessagePhoto } from '../../actions/message'

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
        }
    }
}

export default connect(null, mapDispatchToProps)(ChatFrame)