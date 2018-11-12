import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import classnames from 'classnames';
import 'moment/locale/vi'

class History extends Component {
    onClickStart(e) {
        e.preventDefault();
        let funcCall = this.props.user.isStar ? this.props.unMarkStarUser : this.props.markStarUser;
        funcCall(this.props.user.id);
    }

    openChat() {
        this.props.openChat(this.props.user)
    }

    render() {
        return (
            <div className={classnames({ "history-container media": true, "history-not-read": !this.props.user.isReadedMessage })}>
                <img src={this.props.user.avatarUrl} alt="avt" className="align-self-center mr-3 history-avt" onClick={this.openChat.bind(this)}/>
                <div className="media-body">
                    <p className="history-name" onClick={this.openChat.bind(this)}>{this.props.user.displayName}</p>
                    <p className="history-content" onClick={this.openChat.bind(this)}>{this.props.user.lastMessage}</p>
                    <p className="history-time" onClick={this.openChat.bind(this)}>
                        {this.props.user && (this.props.user.isOnline ? "Đang online" : (this.props.user.lastOnline ? (moment(this.props.user.lastOnline).locale('vi').fromNow()) : "Offline"))}
                    </p>
                    <div className="history-addon">
                        <i
                            className={classnames({ "fas fa-star chat-star": true, "chat-star-active": this.props.user.isStar })}
                            onClick={this.onClickStart.bind(this)}
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}

History.propTypes = {
    user: PropTypes.object,
    openChat: PropTypes.func.isRequired,
    markStarUser: PropTypes.func,
    unMarkStarUser: PropTypes.func,
};

export default History;