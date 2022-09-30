import React from "react";

const Navigate = () => {
  return (
    <div className="plan__col__navigate__items">
      <div className="plan__col__navigate__items__item">
        <div className="plan__col__navigate__items__item__number">1</div>
        <span className="plan__col__navigate__items__item__text">Datos</span>
      </div>
      <div className="plan__col__navigate__items__item active">
        <div className="plan__col__navigate__items__item__number">2</div>
        <span className="plan__col__navigate__items__item__text">Arma tu plan</span>
      </div>
    </div>
  );
};

export default Navigate;
