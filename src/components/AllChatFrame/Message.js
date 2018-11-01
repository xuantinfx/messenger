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
                    <img src={this.props.avtUrl} className="chatframe-avt-left" alt=""/>
                    <span className="chatframe-content-mess-left" ref={e => this.domMessLeft = e}>
                        {this.props.content}
                    </span>
                </div>
            </div>
        )
    }

    renderMessRight() {
        return (
            <div className="chatframe-mess-container">
                <div className="chatframe-mess-content-right">
                    <img src={this.props.avtUrl} className="chatframe-avt-right" alt=""/>
                    <span className="chatframe-content-mess-right" ref={e => this.domMessRight = e}>
                        {this.props.content}
                    </span>
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
    isSend: PropTypes.bool,
    avtUrl: PropTypes.string,
    content: PropTypes.string
};

export default Message;