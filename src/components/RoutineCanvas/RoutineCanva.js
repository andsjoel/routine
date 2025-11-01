import React from "react";
import RoutineBox from "./RoutineBox";

export const RoutineCanvas = ({ routine, updateServiceTime }) => {
  const sorted = [...routine.servicos].sort((a, b) =>
    a.horario.localeCompare(b.horario)
  );

  return (
    <section className="routine-canvas">
      <div className="canvas-header">
        <h3>{routine.nome}</h3>
        <small>{routine.dia}</small>
      </div>

      <div className="canvas-body">
        {sorted.length === 0 ? (
          <div className="empty">
            <p>Nenhum serviço adicionado.</p>
          </div>
        ) : (
          <div className="flow">
            {sorted.map((s, i) => (
              <div key={s.uid} className="flow-item">
                <RoutineBox
                  servico={s}
                  onChangeTime={(t) => updateServiceTime(routine.id, s.uid, t)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RoutineCanvas;
