export function useReducer(state = null , action){
    switch(action.type){
        case 'LOGIN':
            return action.payload
        case 'LOGOUT':
            return '555 logout'
        default:
            return state;
    }
}