// MATERIAL UI
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// USESTATE
import { useState } from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// STYLE
import styled from "styled-components";

export default function Categories() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledCategories>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "white", background: "#393939a5" }}
      >
        categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ background: "#1b1b1b89" }}
      >
        <MenuItem style={{ background: "#1b1b1b" }} onClick={handleClose}>
          <Link
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            to="/"
          >
            {" "}
            All
          </Link>
        </MenuItem>
        <MenuItem style={{ background: "#1b1b1b" }} onClick={handleClose}>
          <Link
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            to="/category/desklamps"
          >
            Desk lamps
          </Link>
        </MenuItem>
        <MenuItem style={{ background: "#1b1b1b" }} onClick={handleClose}>
          <Link
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "white",
            }}
            to="/category/floorlamps"
          >
            Floor lamps
          </Link>
        </MenuItem>
      </Menu>
    </StyledCategories>
  );
}

const StyledCategories = styled.div`
  position: absolute;
  left: 22rem;
  color: white;

  @media (max-width: 700px) {
    left: 2rem;
    top: 1rem;
    background: black;
  }
`;
