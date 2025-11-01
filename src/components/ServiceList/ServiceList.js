import React, { useState } from "react";
import { servicesMock } from "../../services/servicesMock";
import ServiceItem from "./ServiceItem";

export const ServiceList = ({ onAddService }) => {
  const [openCategory, setOpenCategory] = useState(
    Object.keys(servicesMock)[0]
  );

  return (
    <aside className="service-list">
      <h4>Serviços disponíveis</h4>
      {Object.entries(servicesMock).map(([cat, items]) => (
        <div key={cat} className="service-category">
          <button className="cat-btn" onClick={() => setOpenCategory(cat)}>
            {cat}
          </button>
          {openCategory === cat && (
            <ul>
              {items.map((s) => (
                <ServiceItem
                  key={s.id}
                  servico={s}
                  onAdd={() => onAddService(s)}
                />
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default ServiceList;
