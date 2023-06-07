import logoImage from '@/assets/logo.svg';
import { Link } from 'react-router-dom';
import { HeaderContainer } from "./style";

export const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <img src={logoImage} alt="Github blog" />
    </Link>
  </HeaderContainer>
)