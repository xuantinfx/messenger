import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/vi'

class History extends Component {
    render() {
        return (
            <div className="history-container">
                <p className="history-name">{this.props.user.displayName}</p>
                <p className="history-content">Chao ban!</p>
                <p className="history-time">
                {this.props.user && (this.props.user.isOnline ? "Đang online" : (this.props.user.lastOnline ? (moment(this.props.user.lastOnline).locale('vi').fromNow()) : "Offline") )}
                </p>
                <div className="history-addon">
                    Mở
                </div>
            </div>
        );
    }
}

History.propTypes = {
    user: PropTypes.object
};

export default History;