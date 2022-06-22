import styled from "styled-components";

const Item = ({ items }) => {
  return (
    <StyledItem>
      <h1>{items.login}</h1>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  background: red;
  margin: 5px;
`;
export default Item;
