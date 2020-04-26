import React, { useState,useEffect, useContext } from 'react'

import { ProfileContext } from '../../store/contexts/profileContext'

import Navbar from '../layouts/navbar'

import '../../public/assets/style.scss';

import Logout from '../../utility/logout'


import ReactCrop from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css';


import  { base64StringtoFile,  extractImageFileExtensionFromBase64, image64toCanvasRef} from './fileUtility'
import axiosFuncs from '../../utility/axios';


import Validator from 'validatorjs';



 //   const cropper = React.createRef(null);

const ProfilePic = (props) => {



      const { dispatch  } = useContext(ProfileContext);

      const imagePreviewCanvasRef = React.createRef();

      const [profilePic, setProfilePic] = useState(
              {
    
                profileStep: 7,
                profilePicUrl: '',
                profilePicFile: '',
                crop: {
                // unit: 'px',
                  aspect: 1 / 1 ,
              //    width: 50,
                } 


              })

  const [buttonStateF, setButtonStateF] = useState(true);
  const [buttonStateB, setButtonStateB] = useState(false);
                  
  let rules = {

    profilePicUrl: 'required',
    profilePicFile: 'required',
   

  //  email: 'required|email',
  //  age: 'min:18'
  };
  
  let validation = new Validator(profilePic, rules, { required: 'required*' });

  validation.fails(); // true
  validation.passes(); // false




  useEffect(() => {

    if (validation.passes()) {
            setButtonStateF(false);
          // console.log("the   buttonStete "+buttonState);  
      }else{
        setButtonStateF(true);
      
  }
},[profilePic]);


  const handleImageChange = (e) => {
            e.preventDefault();

            let reader = new FileReader();
            let profilePicFile = e.target.files[0];

        //   console.log("this is the imagfe check view ===================>>>>>>>>>>>>>" +profilePicFile);

            reader.onloadend = () => {
                setProfilePic({ ...profilePic, profilePicFile: profilePicFile, profilePicUrl: reader.result })  
            }

            reader.readAsDataURL(profilePicFile)
          }
// from here



const handleCrop = (crop, percentCrop) => {

  console.log("this is the crop "+JSON.stringify(crop));

  console.log("this is the percent crop "+JSON.stringify(percentCrop));


  //onComplete(crop, percentCrop)
  setProfilePic({ ...profilePic,  crop: percentCrop })  

}

const handleImageLoaded = (image) => {

            console.log("the image that is loaded"+image);
          
          }
          
const handleCompleteCrop = (crop, pixelCrop) => {

 console.log("the crop and the pixel "+JSON.stringify(crop) + JSON.stringify(pixelCrop));

  const canvasRef = imagePreviewCanvasRef.current

  const imgSrc = profilePic.profilePicUrl

  image64toCanvasRef(canvasRef, imgSrc, crop)

}


// save the successfully cropped image to state 
const handleImageSaveWithCrop = (e) => {

  e.preventDefault();

  const canvasRef = imagePreviewCanvasRef.current
  const imgSrc = profilePic.profilePicUrl
  const fileExtension = extractImageFileExtensionFromBase64(imgSrc)
  const imageDate64 = canvasRef.toDataURL('image/'+ fileExtension)

  console.log("the profilePicFile extension is this ===>> "+fileExtension);

  const newFileName = "nomalevo." + fileExtension

  console.log("the new profilePicFile name "+newFileName);

  // profilePicFile to be uploaded
  const newCroppedFile = base64StringtoFile(imageDate64, newFileName)

//   console.log("this si the final cropped "+JSON.stringify(newCroppedFile));

//  console.log("this is the imagfe check view cropped profilePicFile ===================>>>>>>>>>>>>>" +newCroppedFile);
     setProfilePic({ ...profilePic, profilePicFile: newCroppedFile })  



  const stateObj = {
      profileStep:8,
      profilePicUrl: profilePic.profilePicUrl,
      profilePicFile: newCroppedFile

    }

//     this.props.fileStateUpdate(profilePic);


  //props.fileStateUpdate(stateObj);


   //download the profilePicFile
// downloadBase64File(imageDate64, newFileName)






}



// save the image  to state without cropping it
const handleImageSaveWithoutCrop = (e) => {
  e.preventDefault();

  // setProfilePic({ ...profilePic, profilePicFile: newCroppedFile })  

  // this.setState({
  //   profileStep: 8
  //  // profilePicFile: newCroppedFile   
  //   })

  //   const stateObj = {
  //     profileStep:8,
  //     profilePicUrl: profilePic.profilePicUrl,
  //     profilePicFile: profilePic.profilePicFile,

  //   }
  //   //   this.props.fileStateUpdate(profilePicj);


  // this.props.fileStateUpdate(stateObj);



}




const checkToSkipCrop = () => {

  if(profilePic.profilePicUrl){
    return "inline"
  } else {
    return "none"
  }
  

}


const checkToUpladCropped = () => {

  if(profilePic.crop.height){
    return "inline"
  } else {
    return "none"
  }

}

const styles = {
  // height: '50vh',
  //   minHeight: '93vh'
    width:"200" ,
   height:"500"
  }

const conStyle = {
    // height: '50vh',
    //   minHeight: '93vh'
   //   display:"inline"
   cropped : { display: checkToUpladCropped() },
   notCropped : { display: checkToSkipCrop() }
      
    }


// to here

// const  handleChange =(e) => {
//         e.preventDefault(); 
//         setProfilePic({ ...profilePic, [e.target.id]: e.target.value })

//       }


const handleForward = async e => {

        e.preventDefault();
        //   dispatch({type: 'ADD_PROFILE_DATA', payload: profilePic});
        dispatch({type: 'ADD_PROFILE_DATA', payload: {profilePic: profilePic}});

        const next = "F"
        const go = await props.updatestep(next);
        dispatch({type: 'CURRENT_STEP', payload: profilePic.profileStep+1});
        if(go){
        return go
        }

        }

const handleBack = async e => {

        e.preventDefault();

        const next = "B"
        const go = await props.updatestep(next);
        dispatch({type: 'CURRENT_STEP', payload: profilePic.profileStep-1});
        if(go){

        return go
        }

        }


const handleSaveNow = async e => {


      //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

      e.preventDefault();

      // const data =  {...profilePic,  profileStep: profilePic.profileStep+1};
      


      dispatch({type: 'CLEAR_CONTEXT'});
      Logout();

      //logout();

      }

 


  return (



    <div className="pagegrid">
      <Navbar />

        <div className="innergrid">

            <div className="profile-form" >

            <h3>Profile Pic</h3>


            <div className="one-column-row">
                  <div className="column">
                                      
                    <div style={conStyle.notCropped} >Drag you mouse over the image to crop or click the button below to skip</div>
                    <input  type='file' id="profilePic" onChange={(e)=>handleImageChange(e)} />
                 
                      
                  </div>
            </div>

            <div className="two-column-row">
                  <div className="column">
                                      
                      <ReactCrop 
                      src={profilePic.profilePicUrl}
                      onImageLoaded={handleImageLoaded}
                      onComplete={handleCompleteCrop} 
                      circularCrop="true"
                      crop={profilePic.crop} 
                      onChange={handleCrop} />

                      <button style={conStyle.notCropped} onClick={handleImageSaveWithoutCrop}> Skip Cropping And Upload Image </button>

              
                  </div>
                  <div className="column">
                    <canvas ref={imagePreviewCanvasRef} style={styles} ></canvas> 
                    <button  style={conStyle.cropped} onClick={handleImageSaveWithCrop}> Upload  Cropped Image </button>
        
                  </div>
            </div>





            <div className="two-column-row">
                      <div className="column">
                         <button disabled={buttonStateB}  size="small" color="primary" onClick={handleBack}>Back</button>
                      </div>
                  
                      <div className="column">
                         <button disabled={buttonStateF} size="small" color="primary" onClick={handleForward}>Next</button>
                      </div>
                
                </div>
                      <div className="one-column-row">
                      <div className="column componentFooter">
                         <span>6/6</span>
                      </div>
                  </div>
                 

            </div>
        </div>
    </div>



  )
}


export default ProfilePic;


