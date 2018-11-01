import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterChatFrame extends Component {
    state = {
        content: ""
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.content !== "") {
            this.props.sendMessage(this.state.content, "message");
            this.setState({
                content: ""
            })
        }
    }

    onChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div className="chatframe-footer">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input 
                        className="chatframe-input" 
                        placeholder="Nhập nội dung..."
                        onChange={this.onChange.bind(this)}
                        value={this.state.content}
                        />
                    <div className="chatframe-addon">
                        <i 
                            className="fas fa-paper-plane text-primary"
                            onClick={e => this.onSubmit(e)}
                        ></i>
                    </div>
                </form>
            </div>
        );
    }
}

FooterChatFrame.propTypes = {
    sendMessage: PropTypes.func.isRequired
};

export default FooterChatFrame;