import {ACTION_TYPES} from '../actions/user'

const initialState = {}

export const user = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.CREATE:
            return {}

        case ACTION_TYPES.UPDATE:
            return {}
        
        case ACTION_TYPES.FORGOT:
            return {}
        
        case ACTION_TYPES.AUTHENTICATE:
            return {}

        default: 
            return state
    }
}