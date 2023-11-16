import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
// Function to handle user login
// It uses Firebase's signInWithEmailAndPassword method
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
// Signed in 
        const user = userCredential.user;
// Handle errors here, like incorrect password or no user found
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
// The component renders two input fields for email and password,
  return (
    <div>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default Login;