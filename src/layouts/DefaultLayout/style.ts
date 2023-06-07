import { Outlet } from "react-router-dom"
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem; /* 1184px */
  height: calc(100vh - 300px);
  margin: -8rem auto 5rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const OutletContainer = styled(Outlet)`
  margin-top: -3rem;
`
