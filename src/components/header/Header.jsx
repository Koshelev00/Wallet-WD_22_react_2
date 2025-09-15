import HeaderLogo from './HeaderLogo'
import logo from '../../../public/logo.svg'
import {
    HeaderBlock,
    HeaderContainer,
    LogoAndLogout,
    NavButtons,
    HeaderButton,
    LogoutButton,
} from './Header.styled'
import { Link, useLocation } from 'react-router-dom'
import { cleanUserData } from '../../services/auth'

function Header() {
    const location = useLocation()
    const excludedPaths = ['/', '/signin', '/signup']
    const userInfo = localStorage.getItem('userInfo')
    const isAuthenticated = !!userInfo
    const isMyExpensesActive = location.pathname === '/my-expenses'
    const isExpenseAnalysisActive = location.pathname === '/expense-analysis'
    const showButtons =
        isAuthenticated && !excludedPaths.includes(location.pathname)
    return (
        <HeaderContainer>
            <HeaderBlock>
                {showButtons && (
                    <>
                        <LogoAndLogout>
                            <HeaderLogo logo={logo} />
                            <NavButtons>
                                    <Link to="/my-expenses">
                                        <HeaderButton $active={isMyExpensesActive}>
                                            Мои расходы
                                        </HeaderButton>
                                    </Link>
                                    <Link to="/expense-analysis">
                                        <HeaderButton $active={isExpenseAnalysisActive}>
                                            Анализ расходов
                                        </HeaderButton>
                                    </Link>
                            </NavButtons>
                            <Link to="/log-out">
                                <LogoutButton onClick={cleanUserData}>
                                    Выйти
                                </LogoutButton>
                            </Link>
                        </LogoAndLogout>
                    </>
                )}
            </HeaderBlock>
        </HeaderContainer>
    )
}

export default Header