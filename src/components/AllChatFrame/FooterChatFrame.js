import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class FooterChatFrame extends Component {
    render() {
        return (
            <div className="chatframe-footer">
                <input className="chatframe-input" placeholder="Your message here!"/>
                <div className="chatframe-addon">
                    <i className="fas fa-paper-plane text-primary"></i>
                </div>
            </div>
        );
    }
}

FooterChatFrame.propTypes = {

};

export default FooterChatFrame;