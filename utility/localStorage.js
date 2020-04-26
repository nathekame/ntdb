





const getItemFromStorage = (key) => {

    const getlocalItem = localStorage.getItem(key);

    return getlocalItem ? JSON.parse(getlocalItem) : undefined;

}


const setItemInStorage  = (key, value) => {

    const setLocalItem = localStorage.setItem(key, JSON.stringify(value));

    if(setLocalItem == true){
        return true
    }


}






const localStorageFuncs = {

    getItemFromStorage: getItemFromStorage,
    setItemInStorage : setItemInStorage

// end of the module export bracket
} 



export default localStorageFuncs;




