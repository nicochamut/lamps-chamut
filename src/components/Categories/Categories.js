//style

import styled from "styled-components";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Category>
      <h4>
        <Link to="/category/all"> all </Link> |
        <Link to="/category/desk-lamps"> desk lamps</Link> |
        <Link to="/category/floor-lamps"> floor lamps </Link>
      </h4>
    </Category>
  );
};

const Category = styled.div`
  position: absolute;
  top: 1rem;
  left: 18rem;

  a {
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    color: #000000;
    font-size: 1rem;
    font-weight: 100;
    &:hover {
      color: #e58b0d;
    }
  }
`;

export default Categories;
