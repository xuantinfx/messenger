import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {} from 'reactstrap'
import '../css/homepage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-header">
                    Phần mềm nhắn tin với giao diện lạ!
                </div>
                <div className="homepage-login">
                    <button onClick={this.props.login}>Đăng nhập bằng tài khoản Google</button>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    login: PropTypes.func.isRequired
};

export default HomePage