import React, { Component } from 'react';
import {Col, Row} from 'reactstrap'
import SideBar from './SideBar'
import AllChatFrame from './AllChatFrame/AllChatFrame'
import NavBar from '../containers/NavBar'
import '../css/dashboard.css'
//import PropTypes from 'prop-types';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <Row>
                    <Col xs="6" sm="4" md="3" lg="2" className="dashboard-sidebar">
                        <SideBar/>
                    </Col>
                    <Col xs="6" sm="8" md="9" lg="10" className="dashboard-content">
                        <NavBar/>
                        <AllChatFrame/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;