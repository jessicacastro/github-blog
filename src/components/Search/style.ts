import { styled } from "styled-components";

export const SearchContainer = styled.section`
  width: 100%;
  margin-top: 5rem;

  form {
    margin-top: 12px;
    width: 100%;

    input {
      width: 100%;
      height: 50px;
      padding: 12px 16px;
      border-radius: 8px;
      background: ${props => props.theme["base-input"]};
      border: 1px solid ${props => props.theme["base-border"]};
      color: ${props => props.theme["base-label"]};

      &::placeholder {
        color: ${props => props.theme["base-label"]};
      }

      &:focus {
        color: ${props => props.theme["base-text"]};
      }
    }
  }
`

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme["base-span"]};
    line-height: 1.6;
  }
  
`

