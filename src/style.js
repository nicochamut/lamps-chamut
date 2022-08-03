import styled from "styled-components";
import { motion } from "framer-motion";

export const ItemListStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  padding-left: 4rem;
  justify-content: center;

  grid-auto-rows: 40rem;
  grid-gap: 2rem;
  width: 110rem;
  padding-top: 2rem;
  align-items: center;
  margin-top: 3rem;
  color: black;
  margin-bottom: 3rem;
  //
  border: none;
  padding: 0.7em 2em;
  padding-bottom: 2rem;
  font-size: 18px;
  background-blend-mode: multiply;
  border-radius: 9px;
  background: linear-gradient(225deg, #181818, #2e2e2e);
  box-shadow: -5px 5px 10px #191919, 5px -5px 10px #292929;

  .spinner {
    position: absolute;
    right: 50%;
  }

  .link-items {
    list-style: none;
    text-decoration: none;
    box-shadow: 4px 2px 10px #000000;
    border-radius: 5px;
    width: 18rem;
    overflow: hidden;
  }

  @media (max-width: 700px) {
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0rem;
    border: none;
    box-shadow: none;

    align-items: center;
    .link-items {
      width: 25rem;
    }
  }
`;

export const TitleCategory = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 5rem;
  margin-top: 2rem;

  div {
    background: white;
    height: 1px;
    width: 35rem;
    margin-top: 1rem;
  }
`;
