import ChatFrame from '../../components/AllChatFrame/ChatFrame';
import { connect } from 'react-redux'
import { sendMessage, closeChatBox, sendMessagePhoto } from '../../actions/message';
import { markStarUser, unMarkStarUser} from '../../actions/user'

const mapStateToProps = (state, ownProps) => {
    return {
        stars: state.user.stars
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFrame)