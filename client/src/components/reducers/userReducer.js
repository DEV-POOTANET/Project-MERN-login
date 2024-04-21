export function useReducer(state = null , action){
    switch(action.type){
        case 'LOGIN':
            return '555 login'
        case 'LOGOUT':
            return '555 logout'
        default:
            return state;
    }
}