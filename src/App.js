import "./App.css";
import Products from "./pages/Products/Products";
import { useState, useContext } from "react";
import { UserContext } from "./context/userContext"
import { useFirebaseLogin } from "./hooks/firebaseLogin"
import { useFirebaseStorage } from "./hooks/firebaseStorage"
import { useFirebaseFirestore } from "./hooks/firebaseFirestore"

function App() {
  const [SignOut, SignInWithGoogle, localName, localEmail, localPhoto] = useFirebaseLogin()
  const [] = useFirebaseStorage()
  const [userData] = useFirebaseFirestore()
  console.log(userData);
  return (
    <div className="App">
      <h1>Home</h1>
      {
        !localName && <button onClick={SignInWithGoogle}>Sign in with Google</button>
      }
      <h1>{localName}</h1>
      <h1>{localEmail}</h1>
      <img src={localPhoto} alt="" />
      {
        localName && <button onClick={SignOut}>Sign Out</button>
      }
    </div>
  );
}

export default App;
