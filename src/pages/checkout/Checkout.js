import React, { useEffect, useState } from "react";

// styled components
import styled from "styled-components";

// context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

//firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firestore/firestoreConfig";

//framer motion
import { motion } from "framer-motion";
import { fadeOut } from "../../animations/Animations";

const Checkout = () => {
  const initial = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    confirmEmail: "",
  };

  const [values, setValues] = useState(initial);

  const { productsCart, setProductsCart } = useContext(CartContext);

  const [idPurchase, setIdPurchase] = useState();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (values.phone)
      if (values.email !== values.confirmEmail) {
        alert("the mail have to be the same");
      } else if (values.email === values.confirmEmail) {
        setValues(initial);
        const docRef = await addDoc(collection(db, "orders"), {
          values,
          productsCart,
        });
        setTimeout(() => {
          setIdPurchase("");
        }, 10000);
        setIdPurchase(docRef.id);
        setTimeout(() => {
          setProductsCart([]);
        }, 12000);
      }
  };

  useEffect(() => {}, [idPurchase]);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  };

  return (
    <EmailSection
      variants={fadeOut}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
    >
      <FormEmailStyled>
        <form onSubmit={handleSubmit} className="form">
          <div className="containerForm">
            <div className="name-input">
              <label htmlFor="email">First Name</label>
              <input
                id="name"
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="name-input">
              <label htmlFor="email">Last Name</label>
              <input
                id="name"
                type="text"
                value={values.lastname}
                name="lastname"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="phone-email">
              <div>
                <label>Phone</label>
                <input
                  style={{}}
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  id="phone"
                  name="phone"
                  pattern="[0-9]+"
                  title="phone should only contain numbers"
                  required
                ></input>
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  required
                ></input>
              </div>

              <div>
                <label>Confirm Email</label>
                <input
                  type="email"
                  value={values.confirmEmail}
                  onChange={handleChange}
                  name="confirmEmail"
                  required
                ></input>
              </div>
            </div>
          </div>

          <button type="submit">buy now</button>
        </form>
      </FormEmailStyled>
      <div style={{ position: "absolute", bottom: "20%" }}>
        {" "}
        {idPurchase && (
          <h2
            style={{
              color: "white",
              background: "green",
              height: "3rem",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              padding: "1rem",
            }}
          >{`thanks!! :) this is your purchase id: ${idPurchase} `}</h2>
        )}
      </div>
    </EmailSection>
  );
};
export default Checkout;

const EmailSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 85vh;
`;

const FormEmailStyled = styled(motion.div)`
  width: 40rem;
  height: 45rem;
  display: flex;
  border-right: 1px solid grey;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  background: #292929ff;
  box-shadow: 5px 10px 10px black;

  border: none;
  padding: 0.7em 2em;
  font-size: 18px;
  font-family: inherit;
  background-blend-mode: multiply;
  color: rgb(235, 234, 234);
  border-radius: 9px;
  background: linear-gradient(225deg, #181818, #2e2e2e);
  box-shadow: -5px 5px 10px #191919, 5px -5px 10px #292929;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.3rem;

    height: 50rem;

    label {
      color: #ffffff;
      margin-top: 3rem;
    }
    input {
      background: none;
      border: none;
      border-bottom: 1px solid #747474;
      color: #ffffff;
      font-size: 1.3rem;
      margin-top: 1rem;
    }
    // #7a948b;
    input:focus {
      outline: none;
    }

    button {
      border: none;
      padding: 0.7em 2em;
      font-size: 18px;
      font-family: inherit;
      background-blend-mode: multiply;
      color: rgb(235, 234, 234);
      border-radius: 9px;
      background: linear-gradient(225deg, #181818, #2e2e2e);
      box-shadow: -5px 5px 10px #191919, 5px -5px 10px #292929;
    }

    button:hover {
      background: #212121;
      transition: background 1s ease;
      box-shadow: -5px 5px 10px #191919, 5px -5px 10px #292929;
    }

    button:active {
      transition: box-shadow 0.1s ease;
      border-radius: 9px;
      background: #212121;
      box-shadow: inset -5px 5px 10px #191919, inset 5px -5px 10px #292929;
    }

    span {
      opacity: 0.5;
      transition: opacity 0.2s ease;
    }

    button:hover span {
      opacity: 0.7;
    }
    h3 {
      border-bottom: 1px solid grey;
    }
    .containerForm {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 37rem;
      padding: 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .name-input {
    display: flex;
    flex-direction: column;
    width: 30rem;
    input {
      width: 30rem;
    }
  }
  .phone-email {
    display: flex;
    flex-direction: column;
    width: 30rem;

    justify-content: space-around;
    margin-bottom: 1rem;
    input {
      width: 30rem;
    }
    .phone {
      input:invalid {
        border-color: red;
      }
      input,
      input:valid {
        border-color: #ccc;
      }
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1300px) {
  }
  @media screen and (max-width: 500px) {
    border: none;
    height: 60vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    form {
      width: 34rem;
      div {
        align-items: center;
        justify-content: center;
      }
      .name-input {
        input {
          width: 28rem;
          text-align: center;
        }
      }
      .phone-email {
        flex-direction: column;
        label {
          margin-top: 1rem;
        }
        input {
          width: 28rem;
          text-align: center;
        }
      }

      button {
        align-items: center;
        justify-content: center;
        align-self: center;
        display: flex;
        align-items: center;
        img {
          align-self: center;
        }
      }
      div {
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
