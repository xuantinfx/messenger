import React, { Component } from 'react';
import {Input, Col, Row, Button, Alert} from 'reactstrap'
import '../css/registerinfo.css'
import PropTypes from 'prop-types';

class RegisterInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            cofirmpassword: "",
            error: ""
        }
    }

    onChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let { password, cofirmpassword } = this.state;
        let error = ""
        if(password === "") {
            error = "Password không được rỗng"
        } else 
        if(cofirmpassword === "") {
            error = "Cofirm Password không được rỗng"
        } else 
        if(password !== cofirmpassword) {
            error = "Password và Cofirm Password không khớp"
        }
        if(error !== "") {
            this.setState({
                error
            })
            return;
        }
        this.props.submitInfo({
            password
        })
    }

    render() {
        return (
            <div className="registerinfo-container">
                <div className="registerinfo-header">
                    Tạo mật khẩu để hoàn tất đăng ký
                </div>
                <div className="registerinfo-signup">
                    <Row>
                        <Col sm="12" md={{size: 6, offset: 3}} lg={{size: 4, offset: 4}}>
                            <form onSubmit={e => this.onSubmit(e)}>
                                <Input type="password" id="password" placeholder="Password" onChange={this.onChange.bind(this)} required={true}/>
                                <Input type="password" id="cofirmpassword" placeholder="Corfirm Password" onChange={this.onChange.bind(this)} required={true}/>
                                {(this.state.error !== "") &&
                                <Alert color="danger">{this.state.error}</Alert>}
                                <Button color="success" block onClick={e => this.onSubmit(e)}>Tiếp tục</Button>
                            </form>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

RegisterInfo.propTypes = {
    submitInfo: PropTypes.func.isRequired
};

export default RegisterInfo;