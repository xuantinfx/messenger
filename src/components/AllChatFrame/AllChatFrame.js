import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ChatFrame from './ChatFrame'
import '../../css/allchatframe.css'
//import PropTypes from 'prop-types';

class AllChatFrame extends Component {
    
    renderChatFrame() {
        return (
            <Col md="12" lg="6" xl="4">
                <ChatFrame/>
            </Col>
        )
    }

    render() {
        return (
            <div className="allchatframe-container">
                <Row>
                    {this.renderChatFrame()}
                    {this.renderChatFrame()}
                    {this.renderChatFrame()}
                    {this.renderChatFrame()}
                    {this.renderChatFrame()}
                </Row>
            </div>
        );
    }
}

AllChatFrame.propTypes = {

};

export default AllChatFrame;