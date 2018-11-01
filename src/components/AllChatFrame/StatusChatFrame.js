import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusChatFrame extends Component {
    render() {
        let {status} = this.props;
        let classname = "chatframe-status";
        if(status === 'online') {
            classname += " chatframe-online";
        } else {
            classname += " chatframe-offline";
        }
        return (
            <div>
                <p className={classname}>{status}</p>
            </div>
        );
    }
}

StatusChatFrame.propTypes = {
    status: PropTypes.string //online, offline, time
};

export default StatusChatFrame;