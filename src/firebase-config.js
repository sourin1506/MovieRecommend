import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDlA8Xcg2FK4XX1d9CiWgMjmaKFBhxynss',
  authDomain: 'productmanager-7a0e3.firebaseapp.com',
  projectId: 'productmanager-7a0e3',
  storageBucket: 'productmanager-7a0e3.appspot.com',
  messagingSenderId: '699105732664',
  appId: '1:699105732664:web:cec2bba845b474fd5e5ecd',
  measurementId: 'G-6SPTX7Z5RG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
