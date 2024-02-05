import React, { useState } from 'react';
import Auth from '@aws-amplify/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  Auth.configure({
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_8BC0qrdSp',
    userPoolWebClientId: '7lqso2m9tdhts3gbiuebeqf5c2',
  });

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const user = await Auth.signIn(email, password);
      if (user) {
        const jwtToken = user.signInUserSession.accessToken.jwtToken;
        prompt(jwtToken)
      }
    }
    catch (err) {
      console.log(err);
      prompt(err)
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
          lable="Eamil"
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