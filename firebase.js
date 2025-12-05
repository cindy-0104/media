// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBDzzvIzfD69sbhpllo-Al2WDnKsfYFkR0",
    authDomain: "understandingmedia-26901.firebaseapp.com",
    databaseURL: "https://understandingmedia-26901-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "understandingmedia-26901",
    storageBucket: "understandingmedia-26901.firebasestorage.app",
    messagingSenderId: "637508298408",
    appId: "1:637508298408:web:ba3ad3fae5ae0cf808849d",
    measurementId: "G-P2P30D5DFL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window._app = app;
window._db = db;

console.log("🔥 firebase.js loaded!");
console.log("DB:", db);
