import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${props => props.theme["blue-500"]};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 1px ${props => props.theme["blue-500"]};
  }
`

export const ExtraPostInfoContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const ExtraInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`