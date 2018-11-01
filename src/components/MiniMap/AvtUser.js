import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class AvtUser extends Component {
    render() {
        return (
            <div className="minimap-avtuser">
                <img src="./img/avatar.jpg" alt="mini avt"/>
                <i className="fas fa-times"></i>
            </div>
        );
    }
}

AvtUser.propTypes = {

};

export default AvtUser;