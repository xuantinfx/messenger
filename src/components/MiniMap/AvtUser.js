import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvtUser extends Component {
    render() {
        let { miniChat } = this.props
        return (
            <div className="minimap-avtuser">
                <img src={miniChat.avatarUrl} alt="mini avt" onClick={() => this.props.onClickMiniMap(this.props.miniChat.id)}/>
                <i className="fas fa-times" onClick={() => this.props.closeChatBox(miniChat.id)} title="Close"></i>
            </div>
        );
    }
}

AvtUser.propTypes = {
    miniChat: PropTypes.object,
    closeChatBox: PropTypes.func,
    onClickMiniMap: PropTypes.func
};

export default AvtUser;