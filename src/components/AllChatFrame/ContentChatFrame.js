import React, { Component } from 'react';
import Message from './Message'
//import PropTypes from 'prop-types';

class ContentChatFrame extends Component {
    render() {
        return (
            <div className="chatframe-content">
                <Message isSend={true}/>
                <Message isSend={true}/>
                <Message/>
                <Message isSend={true}/>
                <Message/>
                <Message/>
                <Message isSend={true}/>
                <Message/>
                <Message/>
                <Message isSend={true}/>
                <Message/>
                <Message/>
            </div>
        );
    }
}

ContentChatFrame.propTypes = {

};

export default ContentChatFrame;