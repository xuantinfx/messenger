import { auth } from '../actions/auth'

const AuthInitialState = {loadingSignUp: false}

export default (state = AuthInitialState, action) => {
    switch (action.type) {
        case auth.BEGIN_SIGN_UP_WITH_GOOGLE:
            return {
                ...state,
                loadingSignUp: true
            }
        case auth.SIGN_UP_WITH_GOOGLE_DONE:
            return {
                ...state,
                loadingSignUp: false
            }
        default:
            return state
    }
}