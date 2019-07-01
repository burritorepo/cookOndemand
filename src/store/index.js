import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

/* Firebase config */
const firebaseConfig = {
  apiKey: 'AIzaSyDTZzXTxYStVdSw9AesLZyebZE_iqBQ9SM',
  authDomain: 'reactclientpanel-2ce68.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-2ce68.firebaseio.com',
  projectId: 'reactclientpanel-2ce68',
  storageBucket: 'reactclientpanel-2ce68.appspot.com',
  messagingSenderId: '147260590335',
  appId: '1:147260590335:web:fe9b92891f11773d'
};

/* react-redux-firebase config */
const rrfConfig = {
  userProfile: 'users',
  userFirestoreForProfile: true
};

/* Init firebase instance */
firebase.initializeApp(firebaseConfig);

/* init firestore */
const firestore = firebase.firestore();

/* Add reactReduxFirebase enhancer when making store creator */
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

/* Add firebase to reducers */
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

/* Create initial state */
const initialState = {};

/* Create store */
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
