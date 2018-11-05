import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ChatFrame from '../../containers/AllChatFrame/ChatFrame'
import '../../css/allchatframe.css'
import * as _ from 'lodash'
import PropTypes from 'prop-types';

class AllChatFrame extends Component {
    componentWillReceiveProps({users = []}) {
        if(users.length === 0) {
            if(this.isMount === undefined) {
                this.props.loadStars([]);
            }
            this.isMount = false;
        } else if(!this.isMount){
            let myUser = users[_.findIndex(users, o => o.id === this.props.auth.uid)]
            this.isMount = true
            this.props.loadStars(myUser.stars || []);
        }
    }
    
    
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

        // gắn star vào user
        myGroups = myGroups.map(myGroup => {
            let isStar = false;
            // Lấy list stars
            let stars = this.props.stars;
            let members = myGroup.members;
            if(myGroup.memberCount === 2) {
                let opponentMem = {};
                for(let id in members) {
                    let mem = members[id];
                    if(mem.id !== this.props.auth.uid) {
                        opponentMem = mem;
                    }
                }

                let opponentId = opponentMem.id;
                if(_.findIndex(stars, o => o === opponentId) >= 0) {
                    isStar = true;
                } else {
                    isStar = false;
                }
            } else {
                isStar = false;
            }
            myGroup.isStar = isStar;
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
    listOpenChat: PropTypes.array,
    stars: PropTypes.array,
    loadStars: PropTypes.func
};

export default AllChatFrame;