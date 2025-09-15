import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background: #ffffff;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`

export const HeaderBlock = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    box-sizing: border-box;
    justify-content: space-between;
`

export const LogoAndLogout = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
`

export const NavButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
    width: 100%;
    max-width: 300px;
`

export const HeaderButton = styled.button`
    flex: 1;
    background-color: transparent;
    border: none;
    color: black;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0px;
    text-align: center;

    &:hover {
        color: #1fa46c;
        border-bottom: 1px solid #1fa46c;
    }

    ${(props) =>
        props.$active &&
        `
        color: #1fa46c;
        border-bottom: 2px solid #1fa46c;
    `}
`

export const LogoutButton = styled(HeaderButton)`
    width: auto;
    font-weight: 600;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0px;
    text-align: center;

    &:hover {
        color: #1fa46c;
        border-bottom: none;
    }
`

// Адаптивность
// @media (max-width: 768px) {
//     ${NavButtons} {
//         gap: 15px;
//         max-width: 250px;
//     }

//     ${HeaderButton} {
//         font-size: 12px;
//     }

//     ${LogoutButton} {
//         font-size: 12px;
//     }
// }

// @media (max-width: 480px) {
//     ${HeaderBlock} {
//         flex-direction: column;
//         height: auto;
//         padding: 10px;
//         gap: 10px;
//     }

//     ${LogoAndLogout} {
//         flex-direction: row;
//         justify-content: center;
//         width: 100%;
//     }

//     ${NavButtons} {
//         flex-direction: row;
//         width: 100%;
//         max-width: 100%;
//         gap: 10px;
//     }

//     ${HeaderButton} {
//         font-size: 10px;
//     }

//     ${LogoutButton} {
//         font-size: 10px;
//     }
// }