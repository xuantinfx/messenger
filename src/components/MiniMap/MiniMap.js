import React, { Component } from 'react';
import AvtUser from './AvtUser'
import {Col, Row} from 'reactstrap'
import "../../css/minimap.css"
//import PropTypes from 'prop-types';

class MiniMap extends Component {
    renderAvtUser() {
        return (
            <Col md="12" lg="6" xl="4">
                <AvtUser/>
            </Col>
        )
    }

    render() {
        return (
            <div className="minimap-container">
                <Row>
                    {this.renderAvtUser()}
                    {this.renderAvtUser()}
                    {this.renderAvtUser()}
                    {this.renderAvtUser()}
                    {this.renderAvtUser()}
                </Row>
            </div>
        );
    }
}

MiniMap.propTypes = {

};

export default MiniMap;