import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ChatFrame from '../../containers/AllChatFrame/ChatFrame'
import '../../css/allchatframe.css'
import * as _ from 'lodash'
import PropTypes from 'prop-types';

class AllChatFrame extends Component {
    
    renderChatFrame(myGroup, totalFrame) {
        let size = {md: 12, lg: 6, xl: 4}
        if(totalFrame === 1) {
            size.md = 12;
            size.lg = 12;
            size.xl = 12;
        } else if(totalFrame === 2) {
            size.md = 12;
            size.lg = 6;
            size.xl = 6;
        }
        return (
            <Col md={size.md} lg={size.lg} xl={size.xl} key={myGroup.id}>
                <ChatFrame group={myGroup} auth={this.props.auth}/>
            </Col>
        )
    }

    render() {
        let { groups = [], auth = {}, users = [], listOpenChat = [] } = this.props;
        //Lọc ra các group có mình và đang được mở
        let myGroups = _.cloneDeep(groups.filter(group => {
            let isExits = false;
            for(let i = 0; i < group.members.length; i++) {
                if(group.members[i] === auth.uid) {
                    isExits = true;
                    break;
                }
            }

            if(isExits) {
                for(let i = 0; i < listOpenChat.length; i++) {
                    if(group.id === listOpenChat[i]) {
                        return true;
                    }
                }
            }
            return false;
        }))

        //sắp xếp lại theo thứ tự của listOpenChat

        for(let i = 0; i < listOpenChat.length; i++) {
            for(let j = 0; j < myGroups.length; j++) {
                if(listOpenChat[i] === myGroups[j].id) {
                    let temp = myGroups[i];
                    myGroups[i] = myGroups[j];
                    myGroups[j] = temp;
                    break;
                }
            }
        }

        // gắn các user vào members
        myGroups = myGroups.map(myGroup => {
            let members = {};

            for(let i = 0; i< myGroup.members.length; i++) {
                members[myGroup.members[i]] =  users[_.findIndex(users, o => {
                    return o.id === myGroup.members[i];
                })];
            }

            myGroup.members = members;

            return myGroup;
        })

        return (
            <div className="allchatframe-container" /*data-simplebar*/>
                <Row>
                {myGroups.map((myGroup) => {
                    return this.renderChatFrame(myGroup, myGroups.length);
                })}
                </Row>
            </div>
        );
    }
}

AllChatFrame.propTypes = {
    auth: PropTypes.object.isRequired,
    groups: PropTypes.array,
    users: PropTypes.array,
    listOpenChat: PropTypes.array
};

export default AllChatFrame;