import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class History extends Component {
    render() {
        return (
            <div className="history-container">
                <p className="history-name">Tin</p>
                <p className="history-content">Chao ban!</p>
                <p className="history-time">5p trước</p>
                <div className="history-addon">
                    Add
                </div>
            </div>
        );
    }
}

History.propTypes = {

};

export default History;