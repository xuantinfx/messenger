export const auth = {
    SIGN_UP_WITH_GOOGLE_DONE: "SIGN_UP_WITH_GOOGLE_DONE",
    BEGIN_SIGN_UP_WITH_GOOGLE: "BEGIN_SIGN_UP_WITH_GOOGLE",
}

export const beGinsignUpWithGoogle = () => {
    return {
        type: auth.BEGIN_SIGN_UP_WITH_GOOGLE
    }
}

export const signUpWithGoogleDone = () => {
    return {
        type: auth.SIGN_UP_WITH_GOOGLE_DONE
    }
}
