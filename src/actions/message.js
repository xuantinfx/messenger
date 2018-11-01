import * as _ from 'lodash'

export const message = {
    OPEN_CHAT_BOX: "OPEN_CHAT_BOX",
    CLOSE_CHAT_BOX: "CLOSE_CHAT_BOX"
}

export const sendMessage = ({group, author, content, type, time}) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore();
        let id = group.id;

        //thay distionary user thành user thường
        let members = [];
        for(let id in group.members) {
            members.push(id);
        }
        group.members = members;
        //loại trường id
        group = _.omit(group, ["id"])

        //update nội dung
        group.messages = group.messages || [];
        group.messages.push({
            auth: author,
            content,
            type,
            time
        })

        firestore.collection('groups').doc(id).set(group)
    }
}

export const openChatBox = (groupId) => {
    return {
        type: message.OPEN_CHAT_BOX,
        groupId
    }
}

export const closeChatBox = (groupId) => {
    return {
        type: message.CLOSE_CHAT_BOX,
        groupId
    }
}

export const openChat = (user1, user2) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let idGroup = ""
        if(user1 > user2) {
            idGroup = user2 + user1;
        } else {
            idGroup = user1 + user2;
        }

        let firestore = getFirestore();
        firestore.collection('groups').doc(idGroup).get().then((doc) => {
            if (doc.exists) {
                //open chat box
                dispatch(openChatBox(idGroup))
            } else {
                firestore.collection('groups').doc(idGroup).set({
                    memberCount: 2,
                    members: [user1, user2],
                    messages: []
                }).then(() => {
                    //open chat box
                    dispatch(openChatBox(idGroup))
                }).catch((err) => {
                    console.log('err', err)
                })
            }
        }).catch((err) => {
            console.log('err', err)
        });
    }
}