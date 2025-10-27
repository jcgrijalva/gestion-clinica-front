import { useState } from 'react';
import api from '../lib/api';

export default function CreateAppointment() {
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [status, setStatus] = useState('pendiente');

  async function handleSubmit() {
    try {
      await api.post('/appointments', {
        date,
        doctorId: parseInt(doctorId),
        patientId: parseInt(patientId),
        status,
      });
      alert('Cita agendada');
      setDate('');
      setDoctorId('');
      setPatientId('');
    } catch (err) {
      alert('Error al agendar cita');
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Agendar Cita</h1>
      <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} className="input" />
      <input value={doctorId} onChange={e => setDoctorId(e.target.value)} placeholder="ID del doctor" className="input" />
      <input value={patientId} onChange={e => setPatientId(e.target.value)} placeholder="ID del paciente" className="input" />
      <select value={status} onChange={e => setStatus(e.target.value)} className="select">
        <option value="pendiente">Pendiente</option>
        <option value="confirmada">Confirmada</option>
        <option value="cancelada">Cancelada</option>
      </select>
      <button onClick={handleSubmit} className="btn">Guardar</button>
    </div>
  );
}
