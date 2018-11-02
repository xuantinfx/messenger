import * as _ from 'lodash'
import mapGroupId from '../utilities/mapGroupId'

export const message = {
    OPEN_CHAT_BOX: "OPEN_CHAT_BOX",
    CLOSE_CHAT_BOX: "CLOSE_CHAT_BOX"
}

export const sendMessage = ({ group, author, content, type, time }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let firestore = getFirestore();
        let id = group.id;

        //thay distionary user thành user thường
        let members = [];
        for (let id in group.members) {
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

export const sendMessagePhoto = ({ group, author, photo, type, time }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
console.log('aaaaa', group, author, photo, type, time)
        var firebase = getFirebase();
        var storageRef = firebase.storage().ref();

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg'
        };

        // random name
        let name = (author + (new Date().getTime()) + "" + Math.ceil((Math.random() * 100000)));

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('images/' + name).put(photo, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    default: break;
                }
            }, function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default: break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    //console.log('File available at', downloadURL);
                    dispatch(sendMessage({group, author, content: downloadURL, type, time}))
                });
            });
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
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let idGroup = mapGroupId(user1, user2);

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