import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import firebase from "../firebase/firebase"

export const useFirebaseLogin = () => {
    const Auth = getAuth(firebase)
    const provider = new GoogleAuthProvider()

    const SignOut = () => {
        localStorage.clear()
        window.location.reload()
    }
    const SignInWithGoogle = () => {
        signInWithPopup(Auth, provider)
            .then(res => {
                localStorage.setItem("Name", res.user.displayName)
                localStorage.setItem("Email", res.user.email)
                localStorage.setItem("Photo", res.user.photoURL)
                console.log(res.user);
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    let localName = localStorage.getItem("Name"),
        localEmail = localStorage.getItem("Email"),
        localPhoto = localStorage.getItem("Photo")


    return [SignOut, SignInWithGoogle, localName, localEmail, localPhoto]
}


