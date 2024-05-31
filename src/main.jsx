import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAj3PwnnhHII1QAJBb7bauONB14rnbrk_0',
	authDomain: 'thegreatfrog-b1e08.firebaseapp.com',
	projectId: 'thegreatfrog-b1e08',
	storageBucket: 'thegreatfrog-b1e08.appspot.com',
	messagingSenderId: '595735347338',
	appId: '1:595735347338:web:0440a8d3e6846efa1d6d73',
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
