import { firebase } from "../config/firebase.config";
import { signInWithPopup } from "firebase/auth"


const socialMediaAuth = (provider) => {
                    signInWithPopup(firebase, provider) 
                    .then(re => {
                              console.log(re)
                    })
                    .catch(er => {
                              console.log(er.message)
                    })
};



export default socialMediaAuth;