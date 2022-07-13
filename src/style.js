import styled from "styled-components";

export const ItemListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  justify-content: center;
  width: 110rem;
  border: 1px solid black;
  align-items: center;
  margin-top: 3rem;
  color: black;
  .link-items {
    width: 0rem;
    margin: 7rem;
    padding: 0px;
    list-style: none;
    text-decoration: none;
  }
`;
