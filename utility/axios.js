import axios from 'axios'

import config from '../config/config'
//import cookieFuncs from './cookies';

import Cookie from 'js-cookie'




const home = async(token) =>{

    const url = config.apiUrl;

    const options = {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      } 
    try {

        const res =  await axios.get(url, options).then(function (response) {
            // handle success
                    console.log("this is the response "+response);
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.headers);
                    console.log(response.config);
                    return response

                    }).catch(function (error) {
                    // //                                                               // handle error
                    console.log("this is the error "+error);
                    //   console.log("this is the error "+response);

                    return null

                    });

    
        return  res
        
    } catch (error) {
        
    }



}



const userRegister = async (data) => {

    const url = config.apiUrl+"register";
    try {

        const postReq = await axios.post(url, data).then(function (response) {
            // console.log(response);
            // console.log(response.data);
             console.log(response.status);
            return response;
        }).catch(function(error){
            console.log("this is the error that occurred "+error);
            //return error
            return 
        })

        return  postReq
        
    } catch (error) {
        
    }



}




const userLogin = async () => {


    const options = {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${currentUserAuthToken}`
        }
      } 
  
          // Make a request for a user with a given ID
     const url = config.apiUrl 
     const res =  await axios.get(url, options).then(function (response) {
                                                                // handle success
                                          console.log("this is the response "+response);
                                          console.log(response.data);
                                           console.log(response.status);
                                           console.log(response.statusText);
                                           console.log(response.headers);
                                           console.log(response.config);
                                         return response

                                       }).catch(function (error) {
  // //                                                               // handle error
                                                 console.log("this is the error "+error);
//   console.log("this is the error "+response);

                                                 return null

                                                });


            return res;

}


const profilePost = async (data) => {
   // console.log("this s the data that we want to put in the databasev  ooooooooooooooo "+JSON.stringify(data));

   // console.log("this is a test of the JNIJNIOI CONFIG "+config.testEnv);

     //   const cookies = cookieFuncs.getCookie();
        const cookies = Cookie.get('auth')

     //   const currentUserAuthToken = cookies.auth

      //  console.log("this is thr current auto header for the post method of thee profile ooo ->>> "+cookies);

        const url = config.apiUrl+"profile"
        const options = {
              //  withCredentials: true,
                headers: {
              
                'Authorization': `Bearer ${cookies}`,
                'Content-Type':'multipart/form-data'
                }
            } 


        try {


            const postReq = await axios.post(url, data, options).then(function (response) {
                                                                // console.log(response);
                                                                // console.log(response.data);
                                                                 console.log(response.status);
                                                                return response;
                                                            }).catch(function(error){
                                                                console.log("this is the error that occurred "+error);
                                                                //return error
                                                                return 
                                                            })

            //  console.log("this is the outcome of postRep "+JSON.stringify(postReq));

            return  postReq

            
        } catch (error) {

            console.log("an error occurd "+error);




            
        }

                               
    

}


// const setItemInStorage  = (key, value) => {

//     const setLocalItem = localStorage.setItem(key, JSON.stringify(value));

//     if(setLocalItem == true){
//         return true
//     }


// }


const checkBVN = async (bvn)=> {

    const url = config.apiUrl+"bvn/"+bvn;
    console.log("the final url to check "+url)
    try {

        const getReq = await axios.get(url).then(function (response) {
            // console.log(response);
            // console.log(response.data);
             console.log("this is the response satus "+response.status);
            return response;
        }).catch(function(error){
            console.log("this is the error that occurred "+error);
            //return error
            return 
        })

        return  getReq
        
    } catch (error) {
        
    }



}



const axiosFuncs = {

    home:home,
    userRegister: userRegister,
    userLogin: userLogin,
    profilePost: profilePost,
    checkBVN: checkBVN
   // setItemInStorage : setItemInStorage

// end of the module export bracket
} 



export default axiosFuncs;




