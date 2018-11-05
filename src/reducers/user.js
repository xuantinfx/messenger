import { user } from '../actions/user'
import _ from 'lodash'

const starInitialState = {
    stars: []
}
export default (state = starInitialState, action) => {
    switch (action.type) {
        case user.LOAD_STARS:
            return {
                ...state,
                stars: action.stars
            }
        case user.MARK_STAR: {
            let newStars = _.cloneDeep([...state.stars, action.star]);
            newStars = _.uniq(newStars);
            return {
                ...state,
                stars: newStars
            }
        }
        case user.UN_MARK_STAR: {
            let newStars = _.cloneDeep(_.filter(state.stars, o => o !== action.star));
            return {
                ...state,
                stars: newStars
            }
        }
        default:
            return state
    }
}