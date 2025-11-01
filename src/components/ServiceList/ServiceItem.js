import React, { useState } from "react";

const ServiceItem = ({ servico, onAdd }) => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <li className="service-item">
      <div>
        <div className="service-name">{servico.nome}</div>
        <div className="service-desc">
          {servico.descricao} • {servico.duracao} min
        </div>
      </div>
      <div className="service-actions">
        {showAdd ? (
          <button
            className="btn small"
            onClick={() => {
              onAdd();
              setShowAdd(false);
            }}
          >
            + Adicionar
          </button>
        ) : (
          <button className="btn ghost small" onClick={() => setShowAdd(true)}>
            +
          </button>
        )}
      </div>
    </li>
  );
};

export default ServiceItem;
