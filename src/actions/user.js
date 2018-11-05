import * as _ from 'lodash';

export const user = {
    LOAD_STARS: "LOAD_STARS",
    MARK_STAR: "MARK_STAR",
    UN_MARK_STAR: "UN_MARK_STAR"
}

export const loadStars = (stars) => {
    return {
        type: user.LOAD_STARS,
        stars
    }
}

export const addStar = (star) => {
    return {
        type: user.MARK_STAR,
        star
    }
}

export const removeStar = (star) => {
    return {
        type: user.UN_MARK_STAR,
        star
    }
}

export const markStarUser = ({ authId, userId, stars = [] }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let newStars = [...stars, userId]
        newStars = _.uniq(newStars);
        let firebase = getFirebase();
        dispatch(addStar(userId))
        firebase.updateProfile({stars: newStars})
    }
}

export const unMarkStarUser = ({ authId, userId, stars = [] }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let newStars = _.filter(stars, o => o !== userId)
        let firebase = getFirebase();
        dispatch(removeStar(userId))
        firebase.updateProfile({stars: newStars})
    }
}