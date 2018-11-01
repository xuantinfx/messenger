import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Histories from '../containers/Histories'
import MiniMap from './MiniMap/MiniMap'
//import PropTypes from 'prop-types';
import '../css/sidebar.css'
let histories = {value: 'histories', label: "Histories"}, minimap = {value: 'minimap', label: "Mini Map"};
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: histories.value
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div className="sidebar-container">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === histories.value, "sidebar-tab-name": true })}
                            onClick={() => { this.toggle(histories.value); }}
                        >
                            {histories.label}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === minimap.value, "sidebar-tab-name": true })}
                            onClick={() => { this.toggle(minimap.value); }}
                        >
                            {minimap.label}
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId={histories.value}>
                        <Histories/>
                    </TabPane>
                    <TabPane tabId={minimap.value}>
                        <MiniMap/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

SideBar.propTypes = {

};

export default SideBar;