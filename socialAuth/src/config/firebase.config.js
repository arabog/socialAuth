import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
          apiKey: "AIzaSyBDAiWzFvMmlQQxdcznsPkQs6PFZ4y7mp0",
          authDomain: "socialauth-a05f7.firebaseapp.com",
          projectId: "socialauth-a05f7",
          storageBucket: "socialauth-a05f7.appspot.com",
          messagingSenderId: "399596125206",
          appId: "1:399596125206:web:f70bf9ac3cf4fc5bb04937"
};


// init firebase
const app = initializeApp(firebaseConfig);

export const firebase = getAuth(app);


// export default firebase;