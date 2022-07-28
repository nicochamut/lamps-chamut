import React, { useState } from "react";

import styled from "styled-components";

import { useForm } from "react-hook-form";

const Checkout = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (evt) => {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    evt.preventDefault();
    // Aquí puedes usar values para enviar la información

    console.log(values);
  };
  const handleChange = (evt) => {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = evt;
    const { name, value } = target;
    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
    const newValues = {
      ...values,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
  };
  return (
    <StyledForm>
      <div className="box-form">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="email" className="label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </StyledForm>
  );
};
export default Checkout;

const StyledForm = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background: #1b1b1b;
  .box-form {
    background: #2b2b2b;
    width: 40rem;
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 30rem;
    width: 30rem;
    background: green;
    .label {
      margin: 2rem;
      background: blue;
    }
  }
`;
