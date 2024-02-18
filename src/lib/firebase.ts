// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD4T3YpmTIUmlNCEuh_9nWKUQrNYhIbkYE",
  authDomain: "react-native-9d3cc.firebaseapp.com",
  databaseURL: "https://react-native-9d3cc-default-rtdb.firebaseio.com",
  projectId: "react-native-9d3cc",
  storageBucket: "react-native-9d3cc.appspot.com",
  messagingSenderId: "382886181635",
  appId: "1:382886181635:web:3bf5fe587e38e830ec4736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)