import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 48px;
  padding-bottom: 48px;
`

export const BoxCard = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.theme["base-post"]};
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 1px ${props => props.theme["base-label"]};
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      color: ${props => props.theme["base-title"]};
      font-weight: 700;
      font-size: 1.25rem;
    }

    span {
      color: ${props => props.theme["base-span"]};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 20px;
    color: ${props => props.theme["base-text"]};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`