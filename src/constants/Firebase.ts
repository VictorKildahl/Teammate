import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPQBW4PbDZKM6E0SO9rf6fF212ezgH6BU',
  authDomain: 'teammate1-8fe54.firebaseapp.com',
  projectId: 'teammate1-8fe54',
  storageBucket: 'teammate1-8fe54.appspot.com',
  messagingSenderId: '788459650087',
  appId: '1:788459650087:web:95fa35af7779014e4ae202',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
