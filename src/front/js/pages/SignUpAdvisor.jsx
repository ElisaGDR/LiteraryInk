import React, { useState } from "react";

export const SignUpAdvisor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nif, setNif] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [category, setCategory] = useState('');

    const handleName = (event) => setName(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleNif = (event) => setNif(event.target.value);
    const handleAddress = (event) => setAddress(event.target.value);
    const handleCity = (event) => setCity(event.target.value);
    const handleCountry = (event) => setCountry(event.target.value);
    const handleCategoryChange = (selectedCategory) => setCategory(selectedCategory);

    const signupAdvisor = async () => {

        const url = process.env.BACKEND_URL + '/api/signup';

        const dataToSend = {
            "user": {
                "email": email,
                "password": password
            },
            "author": {},
            "advisor": {
                "name": name,
                "nif": nif,
                "address": address,
                "city": city,
                "country": country,
                "category": category,
                "about_me": ""
            }
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
            setName('');
            setEmail('');
            setPassword('');
            setNif('');
            setAddress('');
            setCity('');
            setCountry('');
            setCategory('');

        } else {
            console.log('Error: ', response.status, response.statusText);
        }
        /*   } catch (error) {
              console.error('Error:', error);
          } */
    };

    return (
        <div className="position-relative mx-8" style={{ minHeight: '790px' }}>
            <h1 className="text-center display-5 text-white" style={{ marginTop: '50px', zIndex: '1' }}>Regístrate como empresa</h1>
            <form className="mt-5" style={{ width: "400px", margin: 'auto' }}>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Nombre</label>
                    <input type="text" value={name} onChange={handleName} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Escribe el nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe el email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" value={password} onChange={handlePassword} className="form-control" id="exampleInputPassword1" placeholder="Escribe la contraseña" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputNif">NIF</label>
                    <input type="text" value={nif} onChange={handleNif} className="form-control" id="exampleInputNif1" aria-describedby="nifHelp" placeholder="Escribe el NIF de tu empresa" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Dirección</label>
                    <input type="text" value={address} onChange={handleAddress} className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Escribe la dirección de tu empresa" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputCity">Ciudad</label>
                    <input type="text" value={city} onChange={handleCity} className="form-control" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Escribe la ciudad de tu empresa" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">País</label>
                    <input type="text" value={country} onChange={handleCountry} className="form-control" id="exampleInputcountry" aria-describedby="countryHelp" placeholder="Escribe el país de tu empresa" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputCategory">Category</label>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            {category ? category : 'Seleccionar'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#" onClick={() => handleCategoryChange('Mentor')}>Mentor</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleCategoryChange('Reviewer')}>Reviewer</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="button" onClick={signupAdvisor} className="btn btn-warning fw-bold text-dark">Sign up</button>
                </div>
            </form >
        </div >
    );
};