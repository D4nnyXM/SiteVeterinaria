// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwPN4Ap7wWrmTEF9-U6bwVKMQEA-yWQxA", //senha do seu API
  authDomain: "pets-house-d73e0.firebaseapp.com",
  projectId: "pets-house-d73e0",
  storageBucket: "pets-house-d73e0.appspot.com",
  messagingSenderId: "118281023057",
  appId: "1:118281023057:web:3d5bd3895feb7e159e1270",
  measurementId: "G-JNRNE0TTCZ"
};

// Initialize Firebase
// aqui ja esta para acessar o Banco de dados
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// quando mais de um objeto  => export { app, botao} <= sem o default
