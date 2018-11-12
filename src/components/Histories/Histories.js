import React, { Component } from 'react';
import History from './History'
import SearchHistory from './SearchHistory'
import '../../css/histories.css'
import PropTypes from 'prop-types';
import * as _ from 'lodash'
import isReadedMessage from '../../utilities/isReadedMessage'
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

    markStarUser(userId) {
        //{ authId, userId, stars = [] }
        this.props.markStarUser({
            authId: this.props.auth.uid, userId, stars: this.props.stars
        })
    }

    unMarkStarUser(userId) {
        //{ authId, userId, stars = [] }
        this.props.unMarkStarUser({
            authId: this.props.auth.uid, userId, stars: this.props.stars
        })
    }

    render() {
        let { users = [], auth = {}, groups = [], stars = []} = this.props

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

        // Map tin nhắn cuối cùng và trạng thái đã đọc vào
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
                    // Xem thử tin nhắn cuối cùng đọc chưa
                    user.isReadedMessage = isReadedMessage(groups[i], auth.uid);
                    break;
                }
            } 
            // Nếu chưa nhắn tin thì gán bằng 0 để nó xuống dưới cùng
            if(i === groups.length) {
                user.lastTimeMessage = 0;
                //chưa gửi gì xem như là đã đọc
                user.isReadedMessage = true;
            }
        });

        //map star vào 
        usersRender.map(user => {
            user.isStar = false;
            if(_.findIndex(stars, o => o === user.id) >= 0) {
                user.isStar = true;
            }
            return user;
        })

        // Sắp xếp theo nhắn tin gần nhất và star online lên đầu
        usersRender.sort((user1, user2) => {
            if(user1.isStar && user1.isOnline) {
                return -1;
            } else if(user2.isStar && user2.isOnline) {
                return 1;
            }

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
                    return <History 
                        user={user} 
                        key={index} 
                        openChat={this.openChat.bind(this)}
                        markStarUser={this.markStarUser.bind(this)}
                        unMarkStarUser={this.unMarkStarUser.bind(this)}
                        />
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
    openChat: PropTypes.func.isRequired,
    stars: PropTypes.array,
    markStarUser: PropTypes.func,
    unMarkStarUser: PropTypes.func,
};

export default Histories;