import { initializeApp } from "firebase/app"
import { getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCZdEvdxcgYx4wCdpm2V9KF0aYU4zO3GZQ",
    authDomain: "daily-dress-12202.firebaseapp.com",
    projectId: "daily-dress-12202",
    storageBucket: "daily-dress-12202.appspot.com",
    messagingSenderId: "898105797032",
    appId: "1:898105797032:web:b3d2d12fdb225a32ea959d"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
