import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../img/camus.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { BotonSeguir } from "./BotonSeguir.jsx";
import { BotonEditar } from "./BotonEditar.jsx";
import { Context } from "../store/appContext.js";


export const ProfileCard = (props) => {
    const { store, actions } = useContext(Context);
    
    
    useEffect(() => {
        store.authorIdNumber;
        store.isLogged
      }, []);




    const login = store.isLogged;    
   
    const [editOn, setEditOn] = useState(false);
    const [newAlias, setNewAlias] = useState(props.alias);
    const [newCity, setnewCity] = useState(props.city);
    const [newBirthDate, setNewBirthDate] = useState(props.birthday);
    const localDate = new Date(newBirthDate).toLocaleDateString();
    //props.birthday
    const [newCountry, setNewCountry] = useState(props.country);
    const [newQuote, setNewQuote] = useState(props.quote);
    
    
    const handleEdit = () => {
        if (editOn) {
            actions.editProfile(newAlias,newBirthDate,newCity,newCountry,newQuote)
            setEditOn(false);
        } else {
            setEditOn(true);
        }
    }

    return (
        <div className="card my-1 mx-1"  >
            <img src={pic} className="card-img-top " alt="..." style={{ maxHeight: 'auto' }} />
            <div className="card-body">
                <h5 className="card-title my-1">{newAlias}</h5>
                {editOn ?
                    <div className="input-group input-group-sm mb-3"><input type="text" className="form-control" placeholder="Alias"
                        aria-label="Alias" aria-describedby="basic-addon1" 
                        onChange={(e) => { setNewAlias(e.target.value) }} defaultValue={newAlias} /> 
                    </div> :
                    <h6 className="card-subtitle mb-2 text-body-secondary">{newAlias}</h6>
                }
                {login && (store.authorIdNumber == store.author.id || store.authorIdNumber==0)? <span onClick={handleEdit}> {<BotonEditar /> }</span>: <span/> } 
                {editOn ?
                    <div className="input-group input-group-sm mb-3"><input type="text" className="form-control" placeholder="Cita"
                        aria-label="Cita" aria-describedby="basic-addon1" 
                        onChange={(e) => { setNewQuote(e.target.value) }} defaultValue={newQuote}/>
                    </div> :
                    <p className="card-text"> {newQuote} </p>
                }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    {editOn ?
                        <div className="input-group input-group-sm mb-3"> 
                            <input type="date" className="form-control" placeholder="Fecha de nacimiento"
                            aria-label="Fecha de nacimiento" aria-describedby="basic-addon1"  
                            onChange={(e) => { setNewBirthDate(e.target.value) }} defaultValue={localDate}/>
                        </div> :
                        <> 
                            <p className="card-text text-body-secondary" > 
                             <FontAwesomeIcon icon={faPenNib}  /> {localDate}
                            </p>
                        </>
                    }
                </li>
                <li className="list-group-item">
                    {editOn ?
                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" placeholder="Ciudad" 
                            aria-label="Ciudad" aria-describedby="basic-addon1" 
                            onChange={(e) => { setnewCity(e.target.value) }} defaultValue={newCity}/>
                            <input type="text" className="form-control" placeholder="País"
                                aria-label="País" aria-describedby="basic-addon1" 
                                onChange={(e) => { setNewCountry(e.target.value) }} defaultValue={newCountry} />
                        </div> :
                        <p className="card-text text-body-secondary"><FontAwesomeIcon icon={faLocationDot} /> {newCity} {newCountry} </p>
                    }
                </li>
                <li className="list-group-item">
                    <p className="card-text text-body-secondary"><FontAwesomeIcon icon={faBookOpenReader} /> <span className="text-light"> 153 </span> seguidores </p>
                </li>
                <li className="list-group-item">
                    <p className="card-text text-body-secondary"><FontAwesomeIcon icon={faAlignJustify} /> <span className="text-light"> 75 </span> posts </p>
                </li>
            </ul>
        </div>
    );
};