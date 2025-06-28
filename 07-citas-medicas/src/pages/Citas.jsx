import { Link } from 'react-router-dom';

const citas = [
  { id: 1, paciente: 'Ana González', hora: '10:00 AM' },
  { id: 2, paciente: 'Luis Pérez', hora: '11:30 AM' },
];

function Citas() {
  return (
    <div>
      <h2>Lista de Citas 📅</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              {cita.paciente} - {cita.hora}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
