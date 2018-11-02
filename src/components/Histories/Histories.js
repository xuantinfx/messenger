import React, { Component } from 'react';
import History from './History'
import SearchHistory from './SearchHistory'
import '../../css/histories.css'
import PropTypes from 'prop-types';
import * as _ from 'lodash'
import mapGroupId from '../../utilities/mapGroupId'
import typeMessage from '../../constance/typeMessgae'

class Histories extends Component {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(JSON.stringify(nextProps.users) === JSON.stringify(this.props.users)) {
    //         return false;
    //     }    
    //     return true;
    // }

    state = {
        keyWord: ""
    }
    
    openChat(user) {
        this.props.openChat(user.id, this.props.auth.uid)
    }

    onChangeKeyWord(keyWord) {
        this.setState({
            keyWord
        })
    }

    render() {
        let { users = [], auth = {}, groups = []} = this.props

        // Lọc các user không phải mình ra
        let usersRender = _.cloneDeep(users.filter(user => {
            return user.id !== auth.uid
        }))

        // Filter theo từ khóa được search
        if(this.state.keyWord !== "") {
            usersRender = usersRender.filter(user => {
                let name = _.lowerCase(user.displayName);
                let kw = _.lowerCase(this.state.keyWord);
                return name.indexOf(kw) >= 0;
            })
        }

        // Map tin nhắn cuối cùng vào
        usersRender.forEach(user => {
            let groupId = mapGroupId(user.id, auth.uid);
            let i;
            for( i = 0; i < groups.length; i++) {
                if(groups[i].id === groupId && groups[i].messages.length > 0) {
                    let objLastMessgae = groups[i].messages[groups[i].messages.length - 1];
                    //send photo
                    if(objLastMessgae.type === typeMessage.photo) {
                        user.lastMessage = "A photo"
                    } else {
                        user.lastMessage = objLastMessgae.content;
                    }
                    user.lastTimeMessage = groups[i].messages[groups[i].messages.length - 1].time;
                    break;
                }
            } 
            // Nếu chưa nhắn tin thì gán bằng 0 để nó xuống dưới cùng
            if(i === groups.length) {
                user.lastTimeMessage = 0;
            }
        });

        // Sắp xếp theo nhắn tin gần nhất
        usersRender.sort((user1, user2) => {
            let res = user2.lastTimeMessage - user1.lastTimeMessage;
            if(res === 0) {
                res = (user2.displayName > user1.displayName ? -1 : (user1.displayName > user2.displayName ? 1 : 0))
            }
            return res;
        })

        
        return (
            <div className="histories-container">
                <div className="histories-search">
                    <SearchHistory onChange={this.onChangeKeyWord.bind(this)}/>
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
    groups: PropTypes.array,
    auth: PropTypes.object,
    openChat: PropTypes.func.isRequired
};

export default Histories;