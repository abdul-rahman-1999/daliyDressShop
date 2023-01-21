import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const[user,setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const googleLogout = () =>{
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        };
    }, [])

    const[user1,setUser1]=useState(null);

    useEffect(() => {
        let email = localStorage.getItem("email")
        if(email){
          fetch(`https://dailydress-backend.onrender.com/users/getDetails/${email}`)
          .then((data) => data.json())
          .then((data) => {setUser1(data)})
        }
      },[])

    return (
        <AuthContext.Provider value={{ googleSignIn, googleLogout, user, user1, setUser1 }}>
        {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}