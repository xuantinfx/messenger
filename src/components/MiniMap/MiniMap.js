import React, { Component } from 'react';
import AvtUser from './AvtUser'
import {Col, Row} from 'reactstrap'
import "../../css/minimap.css"
import PropTypes from 'prop-types';
import _ from 'lodash'
import mapGroupId from '../../utilities/mapGroupId'

class MiniMap extends Component {
    closeChatBox(idUser) {
        this.props.closeChatBox(mapGroupId(this.props.auth.uid, idUser))
    }

    renderAvtUser(miniChat, index) {
        return (
            <Col md="12" lg="6" xl="4" key={index}>
                <AvtUser 
                    miniChat={miniChat} 
                    closeChatBox={this.closeChatBox.bind(this)}
                    onClickMiniMap={this.onClickMiniMap.bind(this)}/>
            </Col>
        )
    }

    onClickMiniMap(idUser) {
        let {listDomInput} = this.props;
        let idGroup = mapGroupId(this.props.auth.uid, idUser);
        let DOMInput = listDomInput[_.findIndex(listDomInput, o => o.idGroup === idGroup)];
        DOMInput.DOM.focus({preventScroll: false})
    }

    render() {
        let miniChatRender = [];
        let { listChatBox = [], auth = {}, users = [] } = this.props;
        if(listChatBox.length > 0 && auth && users.length > 0) {
            miniChatRender = _.map(listChatBox, idGroup => {
                // Cắt id của đối phương ra
                let idUser = idGroup.replace(auth.uid,"")
                return users[_.findIndex(users, o => o.id === idUser)]
            })
        }

        if(miniChatRender.length === 0) {
            return (
                <div className="minimap-container">
                    {"Hiện tại đang không chat với ai"}
                </div>
            )
        }

        return (
            <div className="minimap-container">
                <Row>
                    {miniChatRender.map((miniChat, index) => {
                        return this.renderAvtUser(miniChat, index)
                    })}
                </Row>
            </div>
        );
    }
}

MiniMap.propTypes = {
    listChatBox: PropTypes.array,
    auth: PropTypes.object,
    users: PropTypes.array,
    closeChatBox: PropTypes.func,
    listDomInput: PropTypes.array
};

export default MiniMap;