import React from "react";
import { Link } from "react-router-dom";

export const Reviews = () => {
    return (
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center" style={{minHeight: "790px", backgroundColor: '#333333'}}>
            <div className="my-3 py-3">
                <h2 className="display-5 text-white">Reviews</h2>
                <p className="lead text-white">¿Está en búsqueda de una evaluación literaria de alta calidad?</p>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="bg-body shadow-sm mb-4"
                            style={{
                                borderRadius: '21px',
                                backgroundColor: '#333333',
                                border: '4px solid grey',
                                position: 'relative',
                                zIndex: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                color: 'white'
                            }}>
                            <p className="m-5"
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    textAlign: 'justify',
                                    lineHeight: '1.5',
                                    maxWidth: '80%',
                                }}>
                                Nuestro distinguido equipo de críticos literarios, con amplia experiencia académica,
                                se compromete a realizar una minuciosa revisión de la obra que usted desee,
                                aplicando rigurosamente el método técnico de revisión por pares.
                                En este proceso, se enfatiza la objetividad y la acreditación,
                                asegurando así una evaluación crítica fundamentada y de excelencia.
                            </p>
                            <div className="row">
                                <div className="col-md-4 m-2" style={{backgroundColor: '#333333', border: '2px solid grey', borderRadius: '21px'}}>
                                    <div className="card mb-4 box-shadow" style={{backgroundColor: '#333333', borderRadius: '21px', border: '2px solid grey'}}>
                                        <h4 className="my-0 font-weight-normal text-white">Review Unitaria</h4>
                                    </div>
                                    <div className="card-body" style={{backgroundColor: '#333333'}}>
                                        <h1 className="card-title pricing-card-title" style={{fontSize: '20px', color: 'white'}}>11,95€</h1>
                                        <Link to="/login">
                                            <button type="button" className="btn btn-warning fw-bold text-dark mr-2 mt-4">Comprar</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5 m-2" style={{backgroundColor: '#333333', border: '2px solid grey', borderRadius: '21px'}}>
                                    <div className="card mb-4 box-shadow" style={{backgroundColor: '#333333', borderRadius: '21px', border: '2px solid grey'}}>
                                        <h4 className="my-0 font-weight-normal text-white">LiteraryInk Miembro</h4>
                                    </div>
                                    <div className="card-body" style={{backgroundColor: '#333333'}}>
                                        <h1 className="card-title pricing-card-title" style={{fontSize: '20px', color: 'white'}}>23,95€/mes</h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li className="text-white">3 reviews incluidas</li>
                                            <li className="text-white">20% Dto en talleres</li>
                                            <li className="text-white">Acceso a Pen to Print</li>
                                        </ul>
                                        <Link to="/login">
                                            <button type="button" className="btn btn-warning fw-bold text-dark mr-2 mb-4">Hazte miembro</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-grey text-white" style={{borderRadius: '21px', backgroundColor: '#444444'}}>
                            <div className="card-body">
                                <h2 className="card-title">Te ofrecemos:</h2>
                                <ul className="list" style={{textAlign: 'justify', fontSize: '15px'}}>
                                    <li>Evaluación crítica de 400 palabras.</li>
                                    <li>Publicación de sus revisiones con nuestro distintivo sello de acreditación.</li>
                                    <li>Comparativa literaria con obras afines.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
