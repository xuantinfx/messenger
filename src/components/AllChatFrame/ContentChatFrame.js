import React, { Component } from 'react';
import Message from './Message'
import PropTypes from 'prop-types';
import moment from 'moment'
import PendingMessages from './PendingMessages'
import 'moment/locale/vi'

class ContentChatFrame extends Component {
    renderMessage(mess, index) {
        let { members = {} } = this.props.group;
        return <Message 
            isSend={mess.auth === this.props.auth.uid} 
            key={index}
            avtUrl={members[mess.auth].avatarUrl}
            content={mess.content}
            type={mess.type}
            author={members[mess.auth].displayName}
            time={moment(mess.time).local('vi').fromNow()}
            />
    }

    scrollBottom() {
        // scroll xuống dưới cùng khi có tin nhắn
        this.domContainer.scrollTop = this.domContainer.scrollHeight
    }

    componentDidUpdate() {
        this.scrollBottom()
    }

    componentDidMount() {
        this.scrollBottom()
    }

    render() {
        let { messages = [] } = this.props.group;
        return (
            <ul className="chatframe-content" ref={e => this.domContainer = e}>
                {messages.map((mess, index) => {
                    return this.renderMessage(mess, index);
                })}
                <PendingMessages sendingMessage={this.props.sendingMessage} avtUrl={this.props.auth.photoURL}/>
            </ul>
        );
    }
}

ContentChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object,
    sendingMessage: PropTypes.array
};

export default ContentChatFrame;