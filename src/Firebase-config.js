import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRQvkjxtCAK54uE__93njQJrGXEISXMw4',
  authDomain: 'blogproject-c4299.firebaseapp.com',
  projectId: 'blogproject-c4299',
  storageBucket: 'blogproject-c4299.appspot.com',
  messagingSenderId: '412967025677',
  appId: '1:412967025677:web:4d5f41574c50e5afcfa944',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// console.log('Firebase-config, provider:', provider);
//1, export const, export default, for component, or whatever variable you need to use from another file
// export cannot be inside the component function
//2, pass state within component like this. <Login setIsAuth={setIsAuth} />, for variable you need to
// use between parent and child component, pass down, inside component function, pass to the child component
//3, localStorage.setItem.
//Think about the difference among them!
