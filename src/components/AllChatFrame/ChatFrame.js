import React, { Component } from 'react';
import HeaderChatFrame from './HeaderChatFrame'
import ContentChatFrame from './ContentChatFrame'
import FooterChatFrame from './FooterChatFrame'
import '../../css/chatframe.css'
import PropTypes from 'prop-types';

class ChatFrame extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(this.props.group) === JSON.stringify(nextProps.group)) {
            return false;
        }
        return true;
    }

    sendMessage(content, type) {
        let group = this.props.group,
            author = this.props.auth.uid, 
            time = new Date().getTime();

        //group, author, content, type, time
        let info = {
            group,
            author,
            content,
            type,
            time
        }
        this.props.sendMessage(info)
    }

    render() {
        return (
            <div className="chatframe-container">
                <HeaderChatFrame group={this.props.group} auth={this.props.auth} closeChatBox={this.props.closeChatBox}/>
                <ContentChatFrame  group={this.props.group} auth={this.props.auth}/>
                <FooterChatFrame sendMessage={this.sendMessage.bind(this)}/>
            </div>
        );
    }
}

ChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object,
    sendMessage: PropTypes.func,
    closeChatBox: PropTypes.func
};

export default ChatFrame;