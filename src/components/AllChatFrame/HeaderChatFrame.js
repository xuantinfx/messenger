import React, { Component } from 'react';
import StatusChatFrame from './StatusChatFrame'
import PropTypes from 'prop-types';
import moment from 'moment'
import classnames from 'classnames';
import 'moment/locale/vi';

class HeaderChatFrame extends Component {
    onClickStart() {
        let funcCall = this.props.group.isStar ? this.props.unMarkStarUser : this.props.markStarUser;
        funcCall(this.opponentMem.id);
    }

    render() {
        let defaultvalue = -1;
        let { members } = this.props.group;
        let valueStatus = defaultvalue;
        let status = "";
        
        for(let id in members) {
            let mem = members[id];
            if(mem.id !== this.props.auth.uid) {
                if(!mem.isOnline) {
                    valueStatus = valueStatus < (mem.lastOnline || 0) ? (mem.lastOnline || 0) : valueStatus;
                }
            }
        }

        if(valueStatus === defaultvalue) {
            status = "online"
        } else if(valueStatus === 0){
            status = "offline"
        } else {
            status = moment(valueStatus).locale('vi').fromNow()
        }

        let groupName = "";
        if(this.props.group.memberCount !== 2) {
            groupName = this.props.group.name;
        } else {
            let opponentMem = {};
            for(let id in members) {
                let mem = members[id];
                if(mem.id !== this.props.auth.uid) {
                    opponentMem = mem;
                }
            }

            groupName = opponentMem.displayName;
            this.opponentMem = opponentMem;
        }

        return (
            <div className="chatframe-header bg-primary">
                {this.props.group.memberCount === 2 && <i 
                    className={classnames({"fas fa-star chat-star": true, "chat-star-active": this.props.group.isStar})}
                    onClick={this.onClickStart.bind(this)}
                ></i>}
                <p className="chatframe-name">{groupName}</p>
                <StatusChatFrame status={status}/>
                <i onClick={() => {this.props.closeChatBox(this.props.group.id)}} className="fas fa-times chat-close"></i>
            </div>
        );
    }
}

HeaderChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object,
    closeChatBox: PropTypes.func.isRequired,
    unMarkStarUser: PropTypes.func,
    markStarUser: PropTypes.func
};

export default HeaderChatFrame;