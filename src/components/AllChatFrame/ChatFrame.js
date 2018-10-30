import React, { Component } from 'react';
import HeaderChatFrame from './HeaderChatFrame'
import ContentChatFrame from './ContentChatFrame'
import FooterChatFrame from './FooterChatFrame'
import '../../css/chatframe.css'
//import PropTypes from 'prop-types';

class ChatFrame extends Component {
    render() {
        return (
            <div className="chatframe-container">
                <HeaderChatFrame/>
                <ContentChatFrame/>
                <FooterChatFrame/>
            </div>
        );
    }
}

ChatFrame.propTypes = {

};

export default ChatFrame;