import React, { useState } from "react";

export const AddRoutineModal = ({ onClose, onAdd }) => {
  const [nome, setNome] = useState("");
  const [dia, setDia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !dia) return;
    onAdd(nome, dia);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Nova Rotina</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Nome
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Rotina do Rex"
            />
          </label>
          <label>
            Dia
            <input
              type="date"
              value={dia}
              onChange={(e) => setDia(e.target.value)}
            />
          </label>
          <div className="modal-actions">
            <button type="button" className="btn ghost" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn primary">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoutineModal;
