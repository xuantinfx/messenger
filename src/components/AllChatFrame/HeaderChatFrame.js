import React, { Component } from 'react';
import StatusChatFrame from './StatusChatFrame'
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/vi'

class HeaderChatFrame extends Component {
    render() {
        let defaultvalue = 1541069562749000;
        let { members } = this.props.group;
        let valueStatus = defaultvalue;
        let status = "";
        
        for(let id in members) {
            let mem = members[id];
            if(mem.id !== this.props.auth.uid) {
                if(!mem.isOnline) {
                    valueStatus = valueStatus > (mem.lastOnline || 0) ? (mem.lastOnline || 0) : valueStatus;
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
        }

        return (
            <div className="chatframe-header bg-primary">
                <p className="chatframe-name">{groupName}</p>
                <StatusChatFrame status={status}/>
                <i className="fas fa-times"></i>
            </div>
        );
    }
}

HeaderChatFrame.propTypes = {
    group: PropTypes.object,
    auth: PropTypes.object
};

export default HeaderChatFrame;