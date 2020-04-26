


const composeFullProfileData = (data, files) => {

    console.log("the data to compose "+JSON.stringify(data));
      console.log("this is one of the filesdddddddd "+files.idCardFile);
    //  console.log("this is second of the filesdddddddd "+files.profilePicFile);


    const formData = new FormData(); 

    const dataEntries = Object.entries(data) 

            try {
                for (const [key, value] of dataEntries) {  
                    if(key === "idCardFile" ){
                       console.log("i fond the data for idcard "+key);
                       continue             
                        //   res.status(500)
                    }                
        
                    if(value !== "" || value !== undefined){
                       
                            let fAppend = formData.append(key, value)
                                if(fAppend === false){
                                    break
                                }              
                            //   res.status(500)
                    }
    
                }

                if(files !== undefined){
                    if(files.profilePicFile !== undefined){
                        formData.append('profilePic', files.profilePicFile);
                    }
                    if(files.idCardFile !== undefined){
                        formData.append('idCardFile', files.idCardFile);
                    }
                    
                }
             

                
               

               
              return formData
                
            } catch (error) {
                console.log("this is the error "+error);
                return false
                
            }


  }


  const composePartialProfileData = (data) => {

    console.log("the data to compose "+JSON.stringify(data));
    // console.log("this is one of the filesdddddddd "+files.idCardFile);
    // console.log("this is second of the filesdddddddd "+files.profilePicFile);


    const formData = new FormData(); 

    const dataEntries = Object.entries(data) 

            try {
                for (const [key, value] of dataEntries) {  
        
                    if(value !== "" || value !== undefined){
                       
                            let fAppend = formData.append(key, value)
                                if(fAppend === false){
                                    break
                                }              
                            //   res.status(500)
                    }
    
                }
   
              return formData
                
            } catch (error) {
                console.log("this is the error "+error);
                return false
                
            }


  }


const  composeApiData ={
    composeFullProfileData: composeFullProfileData,
    composePartialProfileData: composePartialProfileData
}
  
export default composeApiData