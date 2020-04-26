import jwt from 'jwt-decode';


// this takes two arguments first is the token second is the value requested


const jwtUID = (token) => {

  console.log("the NAV user token  "+token);

  if(token){
    const newTok =  JSON.stringify(jwt(token).userID);

//    console.log("this is the decoded from here ooo " + newTok);


    return newTok

  }

 

  

}

const jwtEmail = (token) => {

    console.log("the NAV user token  "+token);

    if(token){
      const newTok =  JSON.stringify(jwt(token).email);

    //  console.log("this is the decoded from here ooo " + newTok);


      return newTok

    }

   

    

}


const jwtRole = (token) => {

  console.log("the NAV user token  "+token);

  if(token){

  const newTok =  JSON.stringify(jwt(token).role);

 // console.log("this is the decoded from here ooo " + newTok);


    return newTok

  }

}


const jwtProfile = (token) => {

  console.log("the NAV user token  "+token);

  if(token){

   const newTok =  JSON.stringify(jwt(token).isProfileComplete);

  // console.log("this is the decoded from here ooo " + newTok);


    return newTok

  }

}


//const jwtProfileStep = (token) => {

 // console.log("the toke i am using to fined the profiule step  "+token);

//  if(token){

  // const newTok =  JSON.stringify(jwt(token).profileStep);

//   console.log("this is the decoded profile step from the tokeno " + newTok);

 //  stripeMarks = (profileStepValue) => {
  //  const profileStepString = newTok.replace(/"/g, '');

   // const stepToReturn = Number(profileStepString);

//    console.log("this is the decoded profile step from the tokeno After STRIIIPIN  " + stepToReturn);

 //   return profileStepString;

 //  }



  //  return newTok
 //   return stepToReturn

 // }

//}




const jwtFuncs = {
 
  jwtUID: jwtUID,
  jwtEmail : jwtEmail,
  jwtRole : jwtRole,
  jwtProfile : jwtProfile,
 // jwtProfileStep: jwtProfileStep

// end of the module export bracket
} 



export default jwtFuncs;




