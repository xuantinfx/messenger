import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    renderMessLeft() {
        return (
            <li>
                <div className="message-data">
                    <span className="message-data-name"> 
                        <img src={this.props.avtUrl} className="chatframe-avt" alt="" />
                        {this.props.author}
                    </span>
                    <span className="message-data-time">
                    {this.props.time}
                    </span>
                </div>
                <div className="message my-message">
                    {this.props.content}
                </div>
            </li>
        )
    }

    renderMessRight() {
        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time" >
                    {this.props.time}
                    </span> &nbsp; &nbsp;
                    <span className="message-data-name" >
                        {this.props.author}
                    </span> 
                    <img src={this.props.avtUrl} className="chatframe-avt" alt="" />
                </div>
                <div className="message other-message float-right">
                    {this.props.content}
                </div>
            </li>
        )
    }

    render() {
        return (
            <div className="chatframe-mess-container">
                {(this.props.isSend ? this.renderMessRight() : this.renderMessLeft())}
            </div>
        )
    }
}

Message.propTypes = {
    isSend: PropTypes.bool,
    avtUrl: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    time: PropTypes.string
};

export default Message;