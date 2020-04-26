/*
const rmLoginError = (state) => {
    if (state.loginError){
        delete state.loginError;
    }
        return
}
*/


export const authReducer = (state, action) => {

    switch(action.type){
        case 'TEST':
            console.log('TESTING A NES CPMNTESTCNONONKN ');
        //    rmLoginError(state);
        //    return {...state, userID:action.userDetails.userID, userToken: action.userDetails.userToken, isProfileComplete: action.userDetails.isProfileComplete };
          return {...state, jwt:action.userDetails.userID };
        case 'LOGIN':
            console.log('login credentials', action.userDetails);
        //    rmLoginError(state);
        //    return {...state, userID:action.userDetails.userID, userToken: action.userDetails.userToken, isProfileComplete: action.userDetails.isProfileComplete };
          return {...state, jwt:action.userDetails.userID };
        case 'LOGIN_FAILED':
            console.log('login failed with this info', action.errDetail);
            return {...state, loginError: action.errDetail};

        case 'LOGOUT':
            console.log('logout has been triggered');
            return {...state,  userToken: null};
        case 'REGISTER':
        console.log('this is the registration credentials', action.userDetails);
            return {...state, userID:action.userDetails.userID, userToken: action.userDetails.userToken, isProfileComplete: action.userDetails.isProfileComplete };

        default:
          return  {...state, auth:"testin jwt" };
          //  return state
    }


}