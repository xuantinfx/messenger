import * as _ from 'lodash'

export default (presence = [], sessions = [], users = []) => {
    let res = _.cloneDeep(users);
    // map các user đang online vào
    presence.forEach(({key, value}) => {
        res.forEach(user => {
            if(user.id === key) {
                user.isOnline = true
            }
        });
    });

    // map last Online vào các user offline
    res.forEach(user => {
        if(!user.isOnline) {
            for(let i = sessions.length - 1; i >= 0; i--) {
                let {value} = sessions[i];
                if(value.user === user.id) {
                    user.lastOnline = value.endedAt;
                    break;
                }
            }
        }
    })
    return res;
}