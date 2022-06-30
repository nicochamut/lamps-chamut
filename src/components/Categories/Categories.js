//style

import styled from "styled-components";
import { Link } from "react-router-dom";

const Categories = () => {


  return (
    <Category>
      <h4>
        categories:
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
    color: #d6f7fe;
    font-size: 1rem;
  }
`;

export default Categories;
