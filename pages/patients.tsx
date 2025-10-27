import { useState } from 'react';
import api from '../lib/api';

export default function RegisterPatient() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [history, setHistory] = useState('');

  async function handleSubmit() {
    try {
      await api.post('/patients', { name, contact, history });
      alert('Paciente registrado');
      setName('');
      setContact('');
      setHistory('');
    } catch (err) {
      alert('Error al registrar paciente');
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Registrar Paciente</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" className="input" />
      <input value={contact} onChange={e => setContact(e.target.value)} placeholder="Contacto" className="input" />
      <textarea value={history} onChange={e => setHistory(e.target.value)} placeholder="Historial" className="textarea" />
      <button onClick={handleSubmit} className="btn">Guardar</button>
    </div>
  );
}

