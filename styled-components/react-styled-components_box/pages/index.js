import styled from "styled-components";
import BoxWithClassName from "@/components/BoxWithClassName/BoxWithClassName";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents";

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName></BoxWithClassName>
      <BoxWithClassName isBlack></BoxWithClassName>
      <BoxWithStyledComponents/>
      <BoxWithStyledComponents $isBlack/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
display: flex;
`


