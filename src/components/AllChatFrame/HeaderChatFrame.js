import React, { Component } from 'react';
import StatusChatFrame from './StatusChatFrame'
//import PropTypes from 'prop-types';

class HeaderChatFrame extends Component {
    render() {
        return (
            <div className="chatframe-header bg-primary">
                <p className="chatframe-name">Tin</p>
                <StatusChatFrame/>
            </div>
        );
    }
}

HeaderChatFrame.propTypes = {

};

export default HeaderChatFrame;