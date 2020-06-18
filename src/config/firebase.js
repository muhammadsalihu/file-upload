import firebase from "firebase/app"

import "firebase/database"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyC8_OAlmoVZFeyBNElAoHUdm5lmge4HMIg",
  authDomain: "motionwares-f61c0.firebaseapp.com",
  databaseURL: "https://motionwares-f61c0.firebaseio.com",
  projectId: "motionwares-f61c0",
  storageBucket: "motionwares-f61c0.appspot.com",
  messagingSenderId: "480056336096",
  appId: "1:480056336096:web:1c49a16850a0d960637a85",
  measurementId: "G-KPJ2TW07YT",
}

firebase.initializeApp(config)

export const db = firebase.database()
export const storage = firebase.storage()
