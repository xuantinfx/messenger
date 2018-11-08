import React, { Component } from 'react';
import PropTypes from 'prop-types';
import typeMessage from '../../constance/typeMessgae';
import MicrolinkCard from 'react-microlink'
import { Fragment } from 'react'

class PendingMessages extends Component {
    renderContentMess(pendingMess) {
        let {typeMess, content, percent} = pendingMess;
        switch (typeMess) {
            case typeMessage.message:
                if ((content.indexOf('http://') >= 0 ||
                    content.indexOf('https://') >= 0) && content.indexOf(" ") < 0) {
                    return (
                        <MicrolinkCard
                            url={content}
                            size='large'
                            target='_blank'
                        />)
                }
                return <div>{content}</div>
            case typeMessage.photo: {
                let res = null;
                    if(percent !== undefined) {
                        res = <div>Sending Photo {percent}%</div>
                    } else {
                        if(content !== null) {
                            res = <img className="message-photo" src={content} alt="hinh" />
                        } else {
                            res = <img className="message-photo" src={"/img/loading.png"} alt="hinh" />
                        }
                    }
                return res;
                }
            default:
                break;
        }
    }

    render() {
        return (
            <div className="chatframe-mess-container">
                {this.props.sendingMessage.map((pendingMess, index) => {
                    return (
                        <Fragment key={index}>
                            <li className="clearfix">
                                <div className="message-data align-right">
                                    <img src={this.props.avtUrl} className="chatframe-avt" alt="" />
                                </div>
                                <div className="message other-message float-right message-pending">
                                    {this.renderContentMess(pendingMess)}
                                </div>
                            </li>
                        </Fragment>)
                    })
                }
            </div>
        )
    }
}

PendingMessages.propTypes = {
    sendingMessage: PropTypes.array,
    avtUrl: PropTypes.string
};

export default PendingMessages;