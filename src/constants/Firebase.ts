import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYcED03bD-ydVf2VGBDAhL9wbGHJ868kQ',
  authDomain: 'teammate-6b5d2.firebaseapp.com',
  projectId: 'teammate-6b5d2',
  storageBucket: 'teammate-6b5d2.appspot.com',
  messagingSenderId: '697702401581',
  appId: '1:697702401581:web:48d03f94903a6fd24a9aa4',
  measurementId: 'G-J0880QPPYW',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
