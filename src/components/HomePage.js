import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button} from 'reactstrap'
import '../css/homepage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-header">
                    Phần mềm nhắn tin với giao diện lạ!
                </div>
                <div className="homepage-signup">
                    <Row>
                        <Col sm="12" md={{size: 6, offset: 3}} lg={{size: 4, offset: 4}}>
                            <Button 
                                color="danger" 
                                block={true} 
                                onClick={this.props.signUp}
                                disabled={this.props.auth.loadingSignUp}
                                >Tiếp tục bằng tài khoản Google</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    signUp: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

export default HomePage