import { useState } from 'react';
import initializeFirebase from '../Pages/LoginPage/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect } from 'react';

//initialize firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //create new user 
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);

                //data save to database
                saveUser(email, name, 'POST');
                //send usename to firebase After creation
                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {

                }).catch((error) => {

                });
                navigate("/");


            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));


    }

    //login user
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    //login with google 
    const signinWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)

            .then((result) => {

                const user = result.user;
                //save user to database
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || "/";
                navigate(destination);

            }).catch((error) => {

                setAuthError(error.email);


            })

            .finally(() => setIsLoading(false));

    }

    //observe user state
    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [auth])



    //user logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    //send user info to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()


    }
    console.log(isLoading);
    return {
        user,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
        signinWithGoogle
    }
};

export default useFirebase;