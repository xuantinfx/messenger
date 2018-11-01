import React, { Component } from 'react';
import History from './History'
import SearchHistory from './SearchHistory'
import '../../css/histories.css'
import PropTypes from 'prop-types';
import * as _ from 'lodash'

class Histories extends Component {
    openChat(user) {
        this.props.openChat(user.id, this.props.auth.uid)
    }

    render() {
        let { users = [], auth = {}} = this.props

        // Lọc các user không phải mình ra
        let usersRender = _.cloneDeep(users.filter(user => {
            return user.id !== auth.uid
        }))
        
        return (
            <div className="histories-container">
                <div className="histories-search">
                    <SearchHistory/>
                </div>
                <div className="histories-content" >
                {usersRender.map((user, index) => {
                    return <History user={user} key={index} openChat={this.openChat.bind(this)}/>
                })}
                </div>
            </div>
        );
    }
}

Histories.propTypes = {
    users: PropTypes.array,
    auth: PropTypes.object,
    openChat: PropTypes.func.isRequired
};

export default Histories;