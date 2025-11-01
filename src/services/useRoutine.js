import { useState } from "react";

export const useRoutines = () => {
  const [routines, setRoutines] = useState([]);

  const addRoutine = (nome, dia) => {
    setRoutines((prev) => [
      ...prev,
      { id: Date.now().toString(), nome, dia, servicos: [] },
    ]);
  };

  const addServiceToRoutine = (routineId, servico) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.id === routineId
          ? {
              ...r,
              servicos: [
                ...r.servicos,
                { ...servico, horario: "09:00", uid: Date.now().toString() },
              ],
            }
          : r
      )
    );
  };

  const updateServiceTime = (routineId, uid, horario) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.id === routineId
          ? {
              ...r,
              servicos: r.servicos.map((s) =>
                s.uid === uid ? { ...s, horario } : s
              ),
            }
          : r
      )
    );
  };

  return {
    routines,
    addRoutine,
    addServiceToRoutine,
    updateServiceTime,
    setRoutines,
  };
};
