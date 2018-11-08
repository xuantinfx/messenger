import { message } from '../actions/message'
import * as _ from 'lodash'

const messageInitialState = {
    listChatBox: [],
    listDomInput: [],
    sendingMessage: {}
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
            let listDomInput = _.cloneDeep(state.listDomInput);
            listDomInput = _.remove(listDomInput, o => {
                return o.idGroup !== action.groupId;
            })
            return {
                ...state,
                listChatBox,
                listDomInput
            }
        }
        case message.UPDATE_DOM_INPUT: {
            return {
                ...state,
                listDomInput: [...state.listDomInput, {DOM: action.DOM, idGroup: action.idGroup}]
            }
        }
        case message.SENDING_MESSAGE: {
            state.sendingMessage[action.groupId] = state.sendingMessage[action.groupId] || [];
            return {
                ...state,
                sendingMessage: {
                    [action.groupId]: [...(state.sendingMessage[action.groupId]), 
                        {
                            content: action.content,
                            typeMess: action.typeMess,
                            idMess: action.idMess
                        }
                    ]
                }
            }
        }
        case message.UPDATE_PERCENT_UPLOAD: {
            let listSendingMess = _.cloneDeep(state.sendingMessage[action.groupId] || []);
            for(let  i = 0; i < listSendingMess.length; i++) {
                if(listSendingMess[i].idMess === action.idMess) {
                    listSendingMess[i].percent = Math.ceil(action.percent)
                    break;
                }
            }
            return {
                ...state,
                sendingMessage: {
                    [action.groupId]: listSendingMess
                }
            }
        }
        case message.SEND_MESSAGE_DONE: {
             let listSendingMess = _.cloneDeep(state.sendingMessage[action.groupId] || []);
             listSendingMess = _.remove(listSendingMess, o => {
                 return o.idMess !== action.idMess
             })
            return {
                ...state,
                sendingMessage: {
                    [action.groupId]: listSendingMess
                }
            }
        }
        default:
            return state
    }
}