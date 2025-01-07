import React, { useState } from 'react';
import "../css/CardItem.css"
export const CardItem =({ title, description, imageUrl, releaseYear })=> {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
    {/* Tarjeta */}
    <div className="card-item">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h5 className="card-title" onClick={toggleModal}>{title}</h5>
        <p className="card-year">Año: {releaseYear}</p>
      </div>
    </div>

    {/* Modal */}
    {showModal && (
      <div className="modal-overlay" onClick={toggleModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{title}</h2>
          <img src={imageUrl} alt={title} className="modal-image" />
          <p><strong>Descripción:</strong> {description}</p>
          <p><strong>Año de lanzamiento:</strong> {releaseYear}</p>
          <button onClick={toggleModal} className="modal-close-btn">Cerrar</button>
        </div>
      </div>
    )}
  </>
);

}

