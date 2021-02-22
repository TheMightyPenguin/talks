import styled from "styled-components";

const spacingScale = {
  small: 8,
  medium: 16,
  large: 32,
};

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => spacingScale[props.space]}px;
  }
`;

export default VerticalList;
