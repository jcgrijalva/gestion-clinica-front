// pages/login.tsx
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const res = await axios.post('https://gestion-clinica.onrender.com/login', { email, password });
    localStorage.setItem('token', res.data.token);
    alert('Login exitoso');
  }

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
