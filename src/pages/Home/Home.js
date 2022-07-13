import styled from "styled-components";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <HomeS>
      <ItemListContainer />
    </HomeS>
  );
};

const HomeS = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export default Home;
