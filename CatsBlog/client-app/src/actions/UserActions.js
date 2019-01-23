export const SET_USER_INFO = 'SET_USER_INFO'

export function setUserInfo(info) { 

    return {
        type: SET_USER_INFO,
        payload: info
    }
}