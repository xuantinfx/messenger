import React, { Component } from 'react';
import HeaderChatFrame from './HeaderChatFrame'
import ContentChatFrame from './ContentChatFrame'
import FooterChatFrame from './FooterChatFrame'
import '../../css/chatframe.css'
import PropTypes from 'prop-types';
import typeMessage from '../../constance/typeMessgae'
import _ from 'lodash'

class ChatFrame extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(JSON.stringify(this.props.group) === JSON.stringify(nextProps.group)) {
    //         return false;
    //     }
    //     return true;
    // }

    sendMessage(content) {
        let group = this.props.group,
            author = this.props.auth.uid, 
            time = new Date().getTime();

        // group, author, content, type, time
        let info = {
            group,
            author,
            content,
            type: typeMessage.message,
            time
        }
        this.props.sendMessage(info)
    }

    sendMessagePhoto(photo) {
        let group = this.props.group,
            author = this.props.auth.uid, 
            time = new Date().getTime();

            // group, author, photo, type, time
        let info = {
            group,
            author,
            photo,
            type: typeMessage.photo,
            time
        }
        this.props.sendMessagePhoto(info)
    }

    markStarUser(userId) {
        // authId, userId, stars
        this.props.markStarUser({
            authId: this.props.auth.uid, userId, stars: _.cloneDeep(this.props.stars)
        })
    }

    unMarkStarUser(userId) {
        // authId, userId, stars
        this.props.unMarkStarUser({
            authId: this.props.auth.uid, userId, stars: _.cloneDeep(this.props.stars)
        })
    }

    updateDomInput(DOM) {
        this.props.updateDomInput(DOM, this.props.group.id);
    }

    render() {
        return (
            <div className="chatframe-container">
                <HeaderChatFrame 
                    group={this.props.group} 
                    auth={this.props.auth} 
                    closeChatBox={this.props.closeChatBox}
                    markStarUser={this.markStarUser.bind(this)}
                    unMarkStarUser={this.unMarkStarUser.bind(this)}
                />
                <ContentChatFrame  
                    group={this.props.group} 
                    auth={this.props.auth}
                    sendingMessage={this.props.sendingMessage}
                    />
                <FooterChatFrame 
                    sendMessage={this.sendMessage.bind(this)} 
                    sendMessagePhoto={this.sendMessagePhoto.bind(this)}
                    updateDomInput={this.updateDomInput.bind(this)}
                    />
            </div>
        );
    }
}

ChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object,
    sendMessage: PropTypes.func,
    sendMessagePhoto: PropTypes.func,
    closeChatBox: PropTypes.func,
    markStarUser: PropTypes.func,
    unMarkStarUser: PropTypes.func,
    stars: PropTypes.array,
    updateDomInput: PropTypes.func,
    sendingMessage: PropTypes.array
};

export default ChatFrame;