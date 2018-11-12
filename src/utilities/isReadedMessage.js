import _ from 'lodash'
export default (group , uid) => {
    if(group.messages) {
        let lastMessage = group.messages[group.messages.length - 1];
        // đã đọc rồi
        if(!lastMessage) {
            return true;
        }
        // đã đọc rồi
        if(_.findIndex(lastMessage.readers, o => o === uid) >= 0 ) {
            return true;
        }
        return false;
    }
    return true;
}