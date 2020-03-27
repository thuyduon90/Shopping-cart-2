import * as types from '../constants/ActionTypes'

let defaultState = types.READY_TO_BUY;

const notification = (state=defaultState, action) => {
// ==========Switch Cases=============
    switch (action.type) {
        case types.SHOW_NOTIFICATION:
            state = action.notification;
            return state;
        default:
            return state;
    }
    
}
export default notification;