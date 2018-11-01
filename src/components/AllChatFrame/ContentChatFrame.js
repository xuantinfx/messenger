import React, { Component } from 'react';
import Message from './Message'
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import PropTypes from 'prop-types';

class ContentChatFrame extends Component {
    renderMessage(mess, index) {
        let { members = [] } = this.props.group;
        return <Message 
            isSend={mess.auth === this.props.auth.uid} 
            key={index}
            avtUrl={members[mess.auth].avatarUrl}
            content={mess.content}
            />
    }
    render() {
        let { messages = [] } = this.props.group;
        return (
            <div className="chatframe-content" data-simplebar>
                {messages.map((mess, index) => {
                    return this.renderMessage(mess, index);
                })}
            </div>
        );
    }
}

ContentChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object
};

export default ContentChatFrame;