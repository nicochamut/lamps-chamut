import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerSt>
      <div class="loader"></div>
    </SpinnerSt>
  );
};

const SpinnerSt = styled.div`
  .loader {
    margin-top: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid rgb(255, 255, 255, 0.2);
    border-top-color: transparent;
    animation: rot1 1.2s linear infinite;
  }

  @keyframes rot1 {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Spinner;
