const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyDh3zZuQRu9N7Cm2IyeSINBlwsfYS6mqdQ",
    authDomain: "api-demo-255407.firebaseapp.com",
    databaseURL: "https://api-demo-255407.firebaseio.com",
    projectId: "api-demo-255407",
    storageBucket: "api-demo-255407.appspot.com",
    messagingSenderId: "518471512705",
    appId: "1:518471512705:web:044e253069a040e5129380",
    measurementId: "G-JNK14VJLHS"
}

firebase.initializeApp(config)

const db = firebase.firestore()

module.exports = db