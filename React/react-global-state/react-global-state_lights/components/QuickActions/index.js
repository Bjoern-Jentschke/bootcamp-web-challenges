import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lightsOn, lightsOff, countSum }) {
  return (
    <StyledQuickActions>
      <Button
        disabled={countSum === 0 ? true : false}
        type="button"
        onClick={() => {
          lightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={countSum === 8 ? true : false}
        type="button"
        onClick={() => {
          lightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
