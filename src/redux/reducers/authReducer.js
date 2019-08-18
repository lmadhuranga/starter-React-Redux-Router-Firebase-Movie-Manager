import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOADING_COMPLETE, REGISTER_SUCCESS, REGISTER_ERROR }  from '../actions/authTypes';

const initialSate = {
    Error: null
}

export default function(state = initialSate, action) {

    switch(action.type){

        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        
        case LOADING_FINISHED:
            return {
                ...state,
                isLoading: false
            }
        
        case LOGIN_ERROR: 
            return {
                ...state,
                authError: action.payload
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            }

        case SIGNOUT_SUCCESS:
            return state;

        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null
            };

        case SIGNUP_ERROR:
            return {
                ...state,
                authError: action.payload
            }
        
        default:
            return state;
    }
} 