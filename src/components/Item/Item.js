import styled from "styled-components";

//framer motion
import { motion } from "framer-motion";

const Item = ({ prop }) => {
  return (
    <StyledItem>
      <div className="image">
        <img src={prop.imageUrl} alt={prop.title} />
      </div>
      <h1>{prop.title}</h1>
      <p>{prop.features}</p>
      <p>{`available: ${prop.stock}`}</p>
      <h3>${prop.price}</h3>

      <button className="cta">
        <span class="hover-underline-animation"> see more </span>
      </button>
    </StyledItem>
  );
};

const StyledItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #333333ff;
  text-align: center;
  padding: 10px;
  width: 18rem;
  height: 35rem;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 1.4rem;

  background: #242424;
  box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);

  div {
    background: #6b6b6b;
    width: 22rem;
    height: 27rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    width: 24rem;
    font-family: "Montserrat", sans-serif;
    font-size: 2.2rem;
    color: white;
    margin: 4px;
    margin-top: 2rem;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #696454;
  }
  h3 {
    color: #8a8a8a;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .image {
    background: #080808ff;
    box-shadow: 5px 5px 5px black;
    width: 18rem;
    height: 18rem;
    img {
      width: 18rem;
      height: 20rem;
      object-fit: cover;
    }
  }

  // button style

  .cta {
    border: none;
    background: none;
    text-align: center;
    margin-bottom: 1.3rem;
  }

  .cta span {
    padding-bottom: 7px;
    letter-spacing: 4px;
    font-size: 10px;
    width: 10rem;
    text-transform: uppercase;
    padding: 0 1rem 7px 1rem;
  }

  .hover-underline-animation {
    position: relative;
    color: white;
    padding-bottom: 20px;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 700px) {
    width: 25rem;
    .image {
      background: #31313100;
      box-shadow: none;
      img {
        width: 24rem;
        height: 20rem;
      }
    }
  }
`;
export default Item;
