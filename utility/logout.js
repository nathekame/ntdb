import React, { useContext } from 'react'


import Cookie from 'js-cookie'



const Logout = () => {

  //  const router = useRouter()


    localStorage.removeItem('profile');
    Cookie.remove('auth')
    window.location = "/";
    
     
    // localStorage.removeItem('currentUser');


}

export default Logout


