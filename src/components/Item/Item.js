import styled from "styled-components";

const Item = ({ prop }) => {
  return (
    <StyledItem>
      <h1>{prop.title}</h1>
      <div className="image">
        <img src={prop.imageUrl} alt={prop.title} />
      </div>
      <p>{prop.features}</p>
      <h3>${prop.price}</h3>
      <button>see more</button>{" "}
    </StyledItem>
  );
};

const StyledItem = styled.div`
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

  button {
    width: 8rem;
    height: 1.6rem;
    background: #36363600;
    color: white;
    border: none;

    margin-bottom: 10px;

    transition: all 0.3s ease-in;

    &:hover {
      background: #868465;
      color: black;
    }
  }
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
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    padding: 1rem;
    color: #696454;
  }
  h3 {
    color: #a8a8a8;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .image {
    background: #080808ff;
    box-shadow: 5px 5px 5px black;
    width: 16rem;
    height: 18rem;
    img {
      width: 14.5rem;
      height: 17rem;
      object-fit: cover;
      transition: all 0.5s ease-out;
      &:hover {
        width: 16rem;
        height: 18rem;
      }
    }
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
