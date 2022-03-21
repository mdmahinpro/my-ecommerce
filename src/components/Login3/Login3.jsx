import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from "../../firebase.config";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    error: "",
  });

  let navigate=useNavigate()
  let location=useLocation()
  let {from} =location.state || {from:{pathname:'/'}};
  console.log(from);


  let [loggedInUser,setLoggedInUser]=useContext(UserContext)

  let firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // SignUp with Form Validation

  let handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userInfo) => {
          let user = userInfo.user;
        })
        .catch((error) => {
          let newUserInfo = { ...user };
          setUser(newUserInfo);
          updateUserName(user.name);
        });
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          let newuser = {...user}
          setUser(newuser)
          setLoggedInUser(newuser)
          navigate(':from', {replace: true});
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = auth.currentUser();
    user
      .updateProfile({
        displayName: name,
      })
      .then((user) => {
      })
      .catch((error) => {});
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
          error: "",
        };
        setUser(user);
      })
      .catch((error) => {});
  };

  //Google Signin with Firebase Implementation

  let handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let { displayName, email } = result.user;
        let isSignedUser = {
          isSigned: true,
          name: displayName,
          email: email,
        };
        setUser(isSignedUser);
        navigate(from, {replace: true});

      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleNewUser = () => {
    setNewUser(!newUser);
  };

  return (
    <div>
      {
        <h1>User: {loggedInUser.email}</h1>
      }
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
        {newUser && (
          <input
            type="text"
            name="name"
            onBlur={handleBlur}
            placeholder="Name"
            id=""
          />
        )}
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
        />{" "}
        <br />
        <input type="checkbox" onChange={handleNewUser} name="newUser" id="" />
        <label htmlFor="newUser">SignUp</label>
        <br />
        <input type="submit" value={newUser ? "Submit" : "SignIn"} />
      </form>
    </div>
  );
}

export default Login;
