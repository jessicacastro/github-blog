import { styled } from "styled-components";

interface CoverContainerProps {
  isVertical?: boolean
}

export const CoverContainer = styled.section<CoverContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.isVertical ? 'column' : 'row'};
  gap: 2rem;

  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  padding: 2rem;

  img {
    max-width: 148px;
    border-radius: 8px;
  }
`