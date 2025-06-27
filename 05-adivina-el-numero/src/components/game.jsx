import { useState } from 'react';
import InputNumber from './inputNumber';
import Message from './message';
import RestartButton from './restartButton';
import '../App.css';


function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero());
  const [intento, setIntento] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [ganaste, setGanaste] = useState(false);

  function generarNumero() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function verificarNumero() {
    const num = parseInt(intento, 10);
    if (num === numeroSecreto) {
      setMensaje('¡Correcto! 🎉');
      setGanaste(true);
    } else if (num < numeroSecreto) {
      setMensaje('El número es mayor 🔺');
    } else {
      setMensaje('El número es menor 🔻');
    }
  }

  function reiniciar() {
    setNumeroSecreto(generarNumero());
    setIntento('');
    setMensaje('');
    setGanaste(false);
  }

  return (
    <div className="juego">
      <h1>Adivina el Número del 1-100</h1>
      <InputNumber intento={intento} setIntento={setIntento} onCheck={verificarNumero} disabled={ganaste} />
      <Message mensaje={mensaje} />
      {ganaste && <RestartButton onRestart={reiniciar} />}
    </div>
  );
}

export default Game;
