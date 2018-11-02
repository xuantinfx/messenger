import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterChatFrame extends Component {
    state = {
        content: ""
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.content !== "") {
            this.props.sendMessage(this.state.content);
            this.setState({
                content: ""
            })
        }
    }

    onClickSendPhoto() {
        this.DomeFile.click();
    }

    onChangePhoto(e) {
        // console.log(e.target.files);
        this.props.sendMessagePhoto(e.target.files[0])
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
                            className="fas fa-paper-plane text-primary  mr-4"
                            onClick={e => this.onSubmit(e)}
                        ></i>
                        <i 
                            className="fas fa-image text-primary"
                            onClick={this.onClickSendPhoto.bind(this)}
                        ></i>
                    </div>
                </form>
                <input type="file" accept="image/x-png,image/gif,image/jpeg" ref={e => this.DomeFile = e} hidden={true} onChange={e => this.onChangePhoto(e)}/>
            </div>
        );
    }
}

FooterChatFrame.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    sendMessagePhoto: PropTypes.func.isRequired
};

export default FooterChatFrame;