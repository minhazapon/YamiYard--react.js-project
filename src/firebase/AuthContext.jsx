import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const fireContext = createContext(null)

       const GProvider = new GoogleAuthProvider()

      

const AuthContext = ({children}) => {


    const [user, setUsr] = useState(null)

    const CreateUsr = (email, password) =>{
     
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) =>{

       return signInWithEmailAndPassword(auth, email, password)

    }

    const googleA = () =>{

        return signInWithPopup(  auth,  GProvider )
    }


    const logOut = () => {
        
         signOut(auth)
    }

    
    useEffect( ()=>{
        const Unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUsr(currentUser)
            console.log(currentUser)
        } )
        return()=>{
            Unsubscribe();
        }
    }  , [])
    
    
    
    
    
    
    const authInfo = {user, CreateUsr, signIn, googleA, logOut }


    return (
        <div>

            <fireContext.Provider value={authInfo} >
                
                {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;