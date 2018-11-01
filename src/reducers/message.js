import { message } from '../actions/message'
import * as _ from 'lodash'

const messageInitialState = {
    listChatBox: []
}
export default (state = messageInitialState, action) => {
    switch (action.type) {
        case message.OPEN_CHAT_BOX: {
            let listChatBox = [...state.listChatBox, action.groupId]
            listChatBox = _.uniq(listChatBox)
            return {
                ...state,
                listChatBox
            }
        }
        case message.CLOSE_CHAT_BOX: {
            let listChatBox = _.cloneDeep(state.listChatBox);
            listChatBox = _.remove(listChatBox, o => {
                return o !== action.groupId
            })
            return {
                ...state,
                listChatBox
            }
        }
        default:
            return state
    }
}