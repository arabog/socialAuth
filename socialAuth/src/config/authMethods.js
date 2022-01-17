import {
          FacebookAuthProvider, 
          GithubAuthProvider, 
          GoogleAuthProvider
} from 'firebase/auth'


// export const facebookProvider = new firebase.auth.facebookAuthProvider();
// Sign in using a popup.
export const facebookProvider = new FacebookAuthProvider();

export const githubProvider = new GithubAuthProvider();

export const googleProvider = new GoogleAuthProvider();

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
