import styled from "styled-components";

export const ItemListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  justify-content: center;
  width: 140rem;
  align-items: center;

  margin: 2rem 5rem 0rem;

  .link-items {
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7rem;
    padding: 0px;
  }
`;
