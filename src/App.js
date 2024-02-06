import React, { useState } from 'react';
import Auth from '@aws-amplify/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jwtToken, setJwtToken] = useState('');

  Auth.configure({
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_nezidAi2V',
    userPoolWebClientId: '7qel0vt35mbr5gfols1kccrp9d',
  });

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const user = await Auth.signIn(email, password);
      if (user) {
        const token = user.signInUserSession.idToken.jwtToken;
      console.log(token);
      }
    } catch (err) {
      console.log(err);
      setJwtToken(`Error: ${err.message}`);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "30" }}>Get Token</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          style={{ width: "300px", height: "20px", border: "solid", margin: "10px", borderRadius: "5PX", margin: "10PX" }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ width: "300px", height: "20px", border: "solid", margin: "10px", borderRadius: "5PX", margin: "10PX" }}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      
      </div>
    </>
  );
}

export default App;
