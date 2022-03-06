import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import React, { useState } from "react";
import firebaseConfig from "../../firebase.config";

function Login() {
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
  });

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // SignUp with Form Validation

  const handleSubmit = (e) => {
    if(user.email && user.password){
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
    e.preventDefault()
  };
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    } else if (e.target.name === "password") {
      isFieldValid = e.target.value.length > 6;
    }
    if (isFieldValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };

  //Logout Button Implementation
  
  const handleLogut = () => {
    signOut(auth)
      .then(() => {
        const user = {
          isSigned: false,
          name: "",
          email: "",
          password: "",
        };
        setUser(user);
        console.log("Sign Out Successfully");
      })
      .catch((error) => {});
  };

  //Google Signin with Firebase Implementation

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const isSignedUser = {
          isSigned: true,
          name: displayName,
          email: email,
        };
        setUser(isSignedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      {user.isSigned ? (
        <button
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-lg font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleLogut}
        >
          Logout
        </button>
      ) : (
        <button
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-lg rounded-md font-medium  shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
          onClick={handleGoogleSignIn}
        >
          Login with Google
        </button>
      )}
      {user.isSigned && (
        <h1>
          Hello MR {user.name} your email is {user.email}
        </h1>
      )}

      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <h1>OUR AUTHENTICATION SYSTEM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onBlur={handleBlur}
          placeholder="Name"
          id=""
        />
        <br />
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          onBlur={handleBlur}
          placeholder="password"
          required
        />  <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
