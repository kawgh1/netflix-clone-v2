import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// this auth listener allows us to call
// const { user } = useAuthListener();
//
// and access user info anywhere in app - like name, email, etc. for better UX
export default function useAuthListener() {
    // check if user was saved in local storage
    // before using in production, make sure saving the whole user object is safe
    // ie. dont save sensitive user data in local storage just because its convenient
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("authUser"))
    );
    const { firebaseApp } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebaseApp.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem("authUser");
                setUser(null);
            }
        });

        // cleanup
        return () => listener();
    }, []);

    return { user };
}
