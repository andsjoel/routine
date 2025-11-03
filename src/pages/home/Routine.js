import React, { useState } from "react";
import { AddRoutineModal } from "../../components/addRoutineModal";
import ServiceList from "../../components/ServiceList/ServiceList";
import RoutineCanvas from "../../components/RoutineCanvas/RoutineCanva";
import { useRoutines } from "../../services/useRoutine";
import "./routine.css"

const Routine = () => {
  const { routines, addRoutine, addServiceToRoutine, updateServiceTime } =
    useRoutines();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoutineId, setSelectedRoutineId] = useState(null);

  const selectedRoutine =
    routines.find((r) => r.id === selectedRoutineId) || null;

  return (
    <div className="routine-container">
      <div className="routine-column">
        <div className="top-controls">
          <button
            className="btn primary full"
            onClick={() => setModalOpen(true)}
          >
            + Nova Rotina
          </button>
        </div>

        <div className="routines-list">
          {routines.length === 0 ? (
            <div className="empty-card">Nenhuma rotina criada ainda.</div>
          ) : (
            routines.map((r) => (
              <div
                key={r.id}
                className={`routine-card ${
                  r.id === selectedRoutineId ? "active" : ""
                }`}
                onClick={() => setSelectedRoutineId(r.id)}
              >
                <div className="rc-title">{r.nome}</div>
                <div className="rc-day">{r.dia}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="services-column">
        <ServiceList
          onAddService={(s) =>
            addServiceToRoutine(
              selectedRoutineId || (routines[0] && routines[0].id),
              s
            )
          }
        />
      </div>

      <div className="canva-column">
        {selectedRoutine ? (
          <RoutineCanvas
            routine={selectedRoutine}
            updateServiceTime={updateServiceTime}
          />
        ) : (
          <div className="placeholder">Selecione uma rotina para editar</div>
        )}
      </div>

      {modalOpen && (
        <AddRoutineModal
          onClose={() => setModalOpen(false)}
          onAdd={(nome, dia) => {
            addRoutine(nome, dia);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Routine;
