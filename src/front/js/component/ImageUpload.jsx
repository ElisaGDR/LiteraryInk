import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext.js";

export const ImageUpload = () => {
  const { store, actions } = useContext(Context);
  const [files, setFiles] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);


  const uploadFile = (e) => {
    e.preventDefault();
    if (files) {
      actions.uploadFile(files[0]);
    }
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleReset = () => {
    setFiles(null);
    setPreviewImage(null);
    window.location.reload(); 
  };

  return (
    <div className="container">
      <h3><small>Subir Imagen</small></h3>
      <div className="mb-3">
        <input type="file" className="form-control" onChange={handleFileChange} />
      </div>
      <button className="btn btn-warning text-dark fw-bold me-3" onClick={uploadFile}>
        Subir
      </button>
      <button onClick={handleReset} className="btn btn-primary mx-3" type="reset">Cancelar</button>
      <div className="mt-3">
        {previewImage && (
          <div>
            <h4>Imagen Seleccionada:</h4>
            <img className="img-thumbnail" src={previewImage} alt="Imagen Seleccionada" />
          </div>
        )}
      </div>
    </div>
  );
};
