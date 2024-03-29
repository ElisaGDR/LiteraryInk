import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pic from "../../img/camus.jpeg"
import { Context } from "../store/appContext";
import { Cover } from "./Cover.jsx";
import { BotonPago } from "../component/BotonPago.jsx";
//import { AuthorCard } from "../component/AuthorCard.jsx"


export const Membership = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        //console.log("los valores en member son", store.member)
        //store.isLogged;
    }, [])
    return (
        store.isLogged ?
            <div className="container bg-dark text-light mt-5" style={{ minHeight: '790px' }}>
                <h2 className="display-5 text-white"> Suscripción </h2>
                <div className="pt-5 border-top" ></div>
                <div className="px-3 py-2 my-2 border rounded">
                    <div className="card mb-2  mx-1" style={{ minHeight: '218px' }}  >
                        <div className="row g-0">

                            <div className="col-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2 ">
                                <div className=" " style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/author-profile">
                                        <img src={pic} className="img-fluid rounded-start"
                                            alt="..." style={{ height: '217px', width: '155px' }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
                                <div className="card-body">

                                    <h4 className="card-title pb-2">{store.author.alias}</h4>

                                    <h5 className="card-text"> <span className="text-light"> Nombre: </span> {store.member.name} </h5>
                                    <h5 className="card-text"> <span className="text-light"> NIF: </span>{store.member.nif} </h5>
                                    <h5 className="card-text"> <span className="text-light"> Dirección </span> {store.member.address} </h5>
                                    <div className="">
                                        <h5 className="card-text"><small className="text-body-secondary">
                                            <span className="text-light"> Suscripción válida hasta: </span> 31/12/2023 </small></h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
                <div className="container bg-dark text-light mt-5 text-center">
                    <h3 className="display-5 text-white ">Otros Servicios</h3>
                    <div className="d-flex justify-content-center align-items-center px-3">
                        <div className="col-md-4 m-2" style={{ backgroundColor: '#333333', border: '2px solid grey', borderRadius: '21px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card mb-4 box-shadow" style={{ backgroundColor: '#333333', borderRadius: '21px', border: '2px solid grey' }}>
                                <h4 className="m-2 font-weight-normal text-white">Review <br /> Unitaria</h4>
                            </div>
                            <div className="card-body" style={{ backgroundColor: '#333333', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h1 className="card-title pricing-card-title" style={{ fontSize: '20px', color: 'white' }}>11,95€</h1>
                                <BotonPago />
                            </div>
                        </div>
                        <div className="col-md-4 m-2" style={{ backgroundColor: '#333333', border: '2px solid grey', borderRadius: '21px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card mb-4 box-shadow" style={{ backgroundColor: '#333333', borderRadius: '21px', border: '2px solid grey' }}>
                                <h4 className="m-2 font-weight-normal text-white">Taller <br /> completo</h4>
                            </div>
                            <div className="card-body" style={{ backgroundColor: '#333333', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h1 className="card-title pricing-card-title" style={{ fontSize: '20px', color: 'white' }}>359€</h1>
                                <div className="mx-auto"><BotonPago /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <Cover />
    );
};
