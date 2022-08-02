import styled from "styled-components";

export const ItemListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  padding-left: 4rem;
  justify-content: center;
  background: #9c865300;
  grid-auto-rows: 40rem;
  grid-gap: 2rem;
  border-radius: 10px;
  width: 110rem;
  border: 1px solid white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  align-items: center;
  margin-top: 3rem;
  color: black;
  margin-bottom: 3rem;
  box-shadow: 5px 5px 5px black;

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
