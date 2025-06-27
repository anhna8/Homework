function InputNumber({ intento, setIntento, onCheck, disabled }) {
  return (
    <div>
      <input
        type="number"
        value={intento}
        onChange={(e) => setIntento(e.target.value)}
        disabled={disabled}
        placeholder="Ingresa tu número"
      />
      <button onClick={onCheck} disabled={disabled}>
        Adivinar
      </button>
    </div>
  );
}

export default InputNumber;
