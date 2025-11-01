import React, { useState } from "react";

const RoutineBox = ({ servico, onChangeTime }) => {
  const [editing, setEditing] = useState(false);
  const [time, setTime] = useState(servico.horario || "09:00");

  const save = () => {
    onChangeTime(time);
    setEditing(false);
  };

  return (
    <div className="routine-box">
      <div className="box-top">
        <strong>{servico.nome}</strong>
        <small>{servico.duracao} min</small>
      </div>
      <div className="box-desc">{servico.descricao}</div>
      <div className="box-actions">
        {editing ? (
          <>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button className="btn small" onClick={save}>
              Salvar
            </button>
          </>
        ) : (
          <>
            <div className="box-time">{servico.horario}</div>
            <button
              className="btn ghost small"
              onClick={() => setEditing(true)}
            >
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RoutineBox;
