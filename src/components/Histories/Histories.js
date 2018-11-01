import React, { Component } from 'react';
import History from './History'
import SearchHistory from './SearchHistory'
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import '../../css/histories.css'
import PropTypes from 'prop-types';
import * as _ from 'lodash'

class Histories extends Component {
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
                    return <History user={user} key={index}/>
                })}
                </div>
            </div>
        );
    }
}

Histories.propTypes = {
    users: PropTypes.array,
    auth: PropTypes.object
};

export default Histories;