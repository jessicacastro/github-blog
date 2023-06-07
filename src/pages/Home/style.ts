import styled from "styled-components"

export const BloggerContainer = styled.div`
  width: 100%;

  p {
    margin-top: 1rem;
    color: ${props => props.theme["base-text"]}
  }
`

export const BloggerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    color: ${props => props.theme["base-title"]};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme["blue-500"]};

    display: flex;
    gap: 8px;
    align-items: center;
    
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.6;

    &:hover {
      box-shadow: 0px 1px ${props => props.theme["blue-500"]};
    }
  }
`

export const ExtraBloggerInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 1.5rem;
`

export const ExtraInfo = styled.article`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme["base-label"]};
  }

  span {
    color: ${props => props.theme["base-subtitle"]};
  }
`