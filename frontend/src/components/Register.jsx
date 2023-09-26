import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>WeShare!</h1>
            <h2>Registro</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre completo :</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Juan Perez" />
                <label htmlFor="email">Correo electrónico :</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="juan.perez@gmail.com" id="email" name="email" />
                <label htmlFor="password">Contraseña :</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="log" type="submit">Registrarme</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>¿Ya tienes una cuenta? Iniciá sesión aquí.</button>
        </div>
    )
}