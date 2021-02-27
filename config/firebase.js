import firebase from 'firebase/app'
import 'firebase/auth'
import store from 'store'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable

import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore

// firebase config
export const fbConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// react-redux-firebase config
export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
if (!firebase.apps.length) {
  // Init firebase instance
  firebase.initializeApp(fbConfig)
  // Initialize Cloud Firestore through Firebase
  // firebase.firestore() // <- needed if using firestore
  // firebase.functions() // <- needed if using httpsCallable
}

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
}


export const app = firebase.app()
export const auth = firebase.auth()
export const db = firebase.firestore()
export const now = firebase.firestore.Timestamp.now()
// export const storage = firebase.storage()

// Use emulators for development
// if (process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost') {
// auth.useEmulator(`http://${process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST}:${process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_AUTH_PORT}`)
// db.useEmulator(
//   process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST,
//   process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_PORT,
// )
// }
