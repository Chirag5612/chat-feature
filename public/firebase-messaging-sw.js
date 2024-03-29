// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "%process.env.REACT_APP_FIREBASE_API_KEY%",
    authDomain: "%process.env.REACT_APP_FIREBASE_AUTH_DOMAIN%",
    databaseURL: "%process.env.REACT_APP_FIREBASE_DATABASE_URL%",
    projectId: "%process.env.REACT_APP_FIREBASE_PROJECT_ID%",
    storageBucket: "%process.env.REACT_APP_FIREBASE_STORAGE_BUCKET%",
    messagingSenderId: "%process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID%",
    appId: "%process.env.REACT_APP_FIREBASE_APP_ID%",
    measurementId: "%process.env.REACT_APP_FIREBASE_MEASUREMENT_ID%",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});