import localStorageFuncs from '../../utility/localStorage'

const checkInLocalStorage = (state, val) => {

    const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
    const localStorageValue = getLocalItem

   // console.log("the persisted local storage value  --->>>  "+localStorageValue);
  
    if(localStorageValue !== undefined){
    //  console.log("there is a value   -->>"+localValue);
        let localStateVal = localStorageValue[state]
        if (localStateVal !== undefined) {
            return localStateVal[val]    
        }
      
    }else{
      return ''
    }
  }

  
export default checkInLocalStorage