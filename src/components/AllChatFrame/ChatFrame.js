import React, { Component } from 'react';
import HeaderChatFrame from './HeaderChatFrame'
import ContentChatFrame from './ContentChatFrame'
import FooterChatFrame from './FooterChatFrame'
import '../../css/chatframe.css'
import PropTypes from 'prop-types';

class ChatFrame extends Component {
    render() {
        return (
            <div className="chatframe-container">
                <HeaderChatFrame group={this.props.group} auth={this.props.auth}/>
                <ContentChatFrame  group={this.props.group} auth={this.props.auth}/>
                <FooterChatFrame/>
            </div>
        );
    }
}

ChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object
};

export default ChatFrame;