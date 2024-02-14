import styled, { css } from "styled-components";

export default styled.div`
      width: 100px;
      height: 100px;
      background-color: ${(props) => (props.$isBlack ? "black" : "green")};
      margin: 2rem;

      &:hover {
        background-color: red;
      }
`
