import _ from 'lodash'


 export const profileReducer = (state, action) => {

 //  _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
//   var array = [1, 2, 3, 4, 5, 6];
// var evens = _.remove(array, function(num) { return num % 2 == 0; });

 
       
        switch(action.type){
         
            case 'ADD_PROFILE_DATA':
                    console.log('Profile data waiting to be added', JSON.stringify(action.payload));
                    console.log('Profile data waiting to be added stattettattatttat --> ', JSON.stringify(state));
                    return {...state, ...action.payload};
            case 'ADD_WORK_DATA':
                        console.log('Profile data waiting to be added', JSON.stringify(action.payload));
                    return {...state, userWorkDetails: action.payload};       
            case 'CLEAR_CONTEXT':
                        //    console.log('Profile data waiting to be added', JSON.stringify(action.payload));
                   return { };
            case 'CURRENT_STEP':
                        console.log('I just added the current PROFILE', JSON.stringify(action.payload));
                        console.log('Profile data waiting to be added stattettattatttat 22222 --> ', JSON.stringify(state));
                      //  console.log('I just added the current PROFILE', JSON.stringify(state.profile));
                      //  state.profileStep = action.payload;
                    return {...state, currentStep: action.payload };
            case 'DELETE_WORK_DETAILS':
                        //   console.log('TESTING A NES CPMNTESTCNONONKN '+JSON.stringify(action.payload));
                           //const toDelete = delete state[action.payload]
                        let checkWorkdetails = _.has(state, action.payload);
                            if(checkWorkdetails){
                                 delete state[action.payload]
                                  // _.remove(state, action.payload);
                            }
                        // console.log("test acttttttttttttt new STTATATATA  "+JSON.stringify(state));         
                    return state;          
            case 'INSTANT_UPDATE_PROFILE':
              //  console.log('Profile data has been added', action.payload);
                return {...state,  ...action.payload};
            case 'CURRENT_PROFILE_STEP':
             //   console.log("this is the profile step from the database "+ JSON.stringify(action));
                return { ...state, ...{profileStep: action.profileStep} };
    
            case 'PROFILE_STEP_BACK':
               //     console.log('we are going a step back in the profile', action.payload);
                return { ...state,  ...{profileStep: action.payload.profileStep} };
    
            case 'CREATE_PROFILE':
                //    console.log('Profile Has Been Created', action.resDetails.isProfileComplete);
                //    console.log("this is the action output state "+ JSON.stringify(state));
                    return {...state,  isProfileComplete: 1};

            case 'CREATE_PROFILE_ERROR':
             //    console.log('there was an error creating the profile', action.errDetail);
                 return {...state,  profileError: true};;
 
            case 'EDIT_PROFILE':
            //    console.log('Profile Edited Successfully', action.userDetails);
                return {...state, isProfileComplete: action.userDetails};
    
            case 'DELETE_PROFILE':
           //     console.log('Profile Deleted');
                return {...state, isProfileComplete: null};
            default:
                return state
        }
    
        //return state
    
 }
    
  