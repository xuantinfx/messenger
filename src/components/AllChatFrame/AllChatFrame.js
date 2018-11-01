import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ChatFrame from './ChatFrame'
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import '../../css/allchatframe.css'
import * as _ from 'lodash'
import PropTypes from 'prop-types';

class AllChatFrame extends Component {
    
    renderChatFrame(myGroup) {
        return (
            <Col md="12" lg="6" xl="4" key={myGroup.id}>
                <ChatFrame group={myGroup} auth={this.props.auth}/>
            </Col>
        )
    }

    render() {
        let { groups = [], auth = {}, users = [] } = this.props;
        //Lọc ra các group có mình
        let myGroups = _.cloneDeep(groups.filter(group => {
            let isExits = false;
            for(let i = 0; i < group.members.length; i++) {
                if(group.members[i] === auth.uid) {
                    isExits = true;
                    break;
                }
            }

            return isExits;
        }))

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
                    return this.renderChatFrame(myGroup);
                })}
                </Row>
            </div>
        );
    }
}

AllChatFrame.propTypes = {
    auth: PropTypes.object.isRequired,
    groups: PropTypes.array
};

export default AllChatFrame;