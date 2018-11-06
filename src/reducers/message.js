import { message } from '../actions/message'
import * as _ from 'lodash'

const messageInitialState = {
    listChatBox: [],
    listDomInput: []
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
        case message.UPDATE_DOM_INPUT: {
            return {
                ...state,
                listDomInput: [...state.listDomInput, {DOM: action.DOM, idGroup: action.idGroup}]
            }
        }
        default:
            return state
    }
}