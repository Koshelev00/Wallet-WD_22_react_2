import HeaderLogo from './HeaderLogo';
import logo from '../../../public/logo.svg';
import {
  HeaderBlock,
  HeaderContainer,
  LogoAndLogout,
  NavButtons,
  HeaderButton,
  LogoutButton,
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  TriangleIcon,
} from './Header.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cleanUserData } from '../../services/auth';
import { useState, useEffect } from 'react';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const excludedPaths = ['/', '/signin', '/signup'];
  const userInfo = localStorage.getItem('userInfo');
  const isAuthenticated = !!userInfo;
  const showButtons =
    isAuthenticated && !excludedPaths.includes(location.pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Мои расходы');

  useEffect(() => {
    if (location.pathname === '/my-expenses') setSelected('Мои расходы');
    if (location.pathname === '/new-expense') setSelected('Новый расход');
    if (location.pathname === '/expense-analysis')
      setSelected('Анализ расходов');
  }, [location.pathname]);

  const handleSelect = (label, path, showForm = false) => {
    setSelected(label);
    setIsOpen(false);
    if (showForm) {
      navigate('/my-expenses', { state: { showNewTransaction: true } });
    } else {
      navigate(path);
    }
  };

  return (
    <HeaderContainer>
      <HeaderBlock>
        <LogoAndLogout>
          <HeaderLogo logo={logo} />

          {showButtons && (
            <>
              <NavButtons>
                <Link to="/my-expenses">
                  <HeaderButton $active={location.pathname === '/my-expenses'}>
                    Мои расходы
                  </HeaderButton>
                </Link>
                <Link to="/expense-analysis">
                  <HeaderButton
                    $active={location.pathname === '/expense-analysis'}
                  >
                    Анализ расходов
                  </HeaderButton>
                </Link>
              </NavButtons>
              <DropdownWrapper>
                <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                  {selected} <TriangleIcon $open={isOpen} />
                </DropdownButton>
                {isOpen && (
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() =>
                        handleSelect('Мои расходы', '/my-expenses')
                      }
                    >
                      Мои расходы
                    </DropdownItem>
                    <DropdownItem
                      onClick={() =>
                        handleSelect('Новый расход', '/my-expenses', true)
                      }
                    >
                      Новый расход
                    </DropdownItem>
                    <DropdownItem
                      onClick={() =>
                        handleSelect('Анализ расходов', '/expense-analysis')
                      }
                    >
                      Анализ расходов
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownWrapper>
              <Link to="/log-out">
                <LogoutButton onClick={cleanUserData}>Выйти</LogoutButton>
              </Link>
            </>
          )}
        </LogoAndLogout>
      </HeaderBlock>
    </HeaderContainer>
  );
}

export default Header;
