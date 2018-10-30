import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null
        }
    }

    componentDidMount() {
        let height = (this.props.isSend ? this.domMessRight.offsetHeight : this.domMessLeft.offsetHeight)
        if(height !== this.state.height) {
            this.setState({
                height: height + 5
            })
        }
    }

    renderMessLeft() {
        return (
            <div className="chatframe-mess-container">
                <div className="chatframe-mess-content-left">
                    <img src="img/avatar.jpg" className="chatframe-avt-left" alt=""/>
                    <span className="chatframe-content-mess-left" ref={e => this.domMessLeft = e}>messsage here asdh aslla á d asd asdasdkasjk asd asd d</span>
                </div>
            </div>
        )
    }

    renderMessRight() {
        return (
            <div className="chatframe-mess-container">
                <div className="chatframe-mess-content-right">
                    <img src="img/avatar.jpg" className="chatframe-avt-right" alt=""/>
                    <span className="chatframe-content-mess-right" ref={e => this.domMessRight = e}>message hjasd asdsjashd asdhasks ashasd dassasdhshas a snsjks dhere</span>
                </div>
            </div>
        )
    }

    render() {
        return (
        <div style={{height: `${this.state.height}px`}}>
            {(this.props.isSend ? this.renderMessRight() : this.renderMessLeft())}
        </div>
        )
    }
}

Message.propTypes = {
    isSend: PropTypes.bool
};

export default Message;