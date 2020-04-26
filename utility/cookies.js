
import cookie from 'cookie'




const getCookie = (req) => {

    if(req){
        return cookie.parse(req.headers.cookie || "")
    }else {
        return document.cookie
    }


    // return cookie.parse(req ? req.headers.cookie || "" : document.cookie);

    // const getlocalItem = localStorage.getItem(key);

    // return getlocalItem ? JSON.parse(getlocalItem) : '';

}


const setCookie  = (key, value) => {

    const setLocalItem = localStorage.setItem(key, JSON.stringify(value));

    if(setLocalItem == true){
        return true
    }


}






const cookieFuncs = {

    getCookie: getCookie,
    setCookie : setCookie

// end of the module export bracket
} 



export default cookieFuncs;




