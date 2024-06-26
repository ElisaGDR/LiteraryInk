import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alias, setAlias] = useState('');

    const handleEmail = (event) => setEmail(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleAlias = (event) => setAlias(event.target.value);

    const signup = async () => {
        const url = process.env.BACKEND_URL + '/api/signup';
        const dataToSend = {
            "user": {
                "email": email,
                "password": password
            },
            "author": {
                "alias": alias
            },
            "advisor": {}
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(dataToSend),

            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log(dataToSend, options, url)
        /*  try { */
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setEmail('');
            setPassword('');
            setAlias('');
            navigate('/');
        } else {
            console.log('Error: ', response.status, response.statusText);
        }
        /*   } catch (error) {
              console.error('Error:', error);
          } */

    };

    return (
        <div className="position-relative mx-8" style={{ minHeight: '790px' }}>
            <h1 className="text-center display-5 text-white" style={{ marginTop: '50px', zIndex: '1' }}>Regístrate</h1>
            <form className="mt-5" style={{ width: "400px", margin: 'auto' }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" value={email} onChange={handleEmail}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" value={password} onChange={handlePassword}
                        className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAlias1">Alias</label>
                    <input type="text" value={alias} onChange={handleAlias}
                        className="form-control" id="exampleInputAlias1" aria-describedby="aliasHelp" placeholder="Escribe tu nombre de usuario" />
                </div>
                <div className="mt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <button type="button" onClick={signup} className="btn btn-warning fw-bold text-dark">Sign up</button>
                    <Link to="/signup-advisor" >
                        <button className="btn border border-0 font-weight-bold btn-lg">Soy una empresa </button>
                    </Link>

                </div>
                <p className="mt-4 pt-5">¿Ya estás registrado?</p>
                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/login" >
                        <button type="button" className="btn btn-primary btn-block"> Login </button>
                    </Link>
                </div>
            </form >
        </div >
    );
};
