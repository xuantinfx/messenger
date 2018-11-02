import React, { Component } from 'react';
import PropTypes from 'prop-types';
import typeMessage from '../../constance/typeMessgae';
import MicrolinkCard from 'react-microlink'

class Message extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
            return false;
        }
        return true;
    }
    
    renderContentMess(content = "", type) {
        switch (type) {
            case typeMessage.message:
                if((content.indexOf('http://') >= 0 ||
                    content.indexOf('https://') >= 0) && content.indexOf(" ") < 0) {
                    return (
                        <MicrolinkCard
                            url={content}
                            size='large'
                            target='_blank'
                        />)
                }
                return <div>{content}</div>
            case typeMessage.photo:
                return <img className="message-photo" src={content} alt="hinh"/>
            default:
                break;
        }
    }

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
                    {this.renderContentMess(this.props.content, this.props.type)}
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
                    {this.renderContentMess(this.props.content, this.props.type)}
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
    time: PropTypes.string,
    type: PropTypes.string
};

export default Message;