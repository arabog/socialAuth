import './App.css';

import { 
	facebookProvider, 
	githubProvider, 
	googleProvider 
} from './config/authMethods';

// // https://socialauth-a05f7.firebaseapp.com/__/auth/handler
// https://firebase.google.com/docs/emulator-suite
// sudo snap install ngrok
// to start in terminal:  ngrok http -region=eu {port_number}


import socialMediaAuth from './auth/auth';
// import { firebase } from "./config/firebase.config"

// // https://developers.facebook.com/docs/development/register


function App() {

	const handleClick = async (provider) => {
		const res = await socialMediaAuth(provider);

		console.log(res)
	}


	return (
		<div className="App">

				<div className="signin">
					<input 
						type="text"

						placeholder="Enter your email"
					/>

					<input 
						type="password"

						placeholder="Enter your password"
					/>

					<button>Sigin</button>
				</div>


				<div className="socials">
					<button 
						onClick={() => handleClick(googleProvider)}
					>
						Google
					</button>

					<button 
						onClick={() => handleClick(githubProvider)}
					>
						GitHub
					</button>

					<button 
						onClick={() => handleClick(facebookProvider )}
					>
						Facebook
					</button>
				</div>
		</div>
	);
}

export default App;

