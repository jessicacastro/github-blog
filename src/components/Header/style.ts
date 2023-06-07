import { styled } from "styled-components";

import headerCover from '@/assets/header-cover.svg';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
  width: 100%;

  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`