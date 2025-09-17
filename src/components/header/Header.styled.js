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
    z-index:20;
    @media(max-width:767px){
         height: 54px;
    }
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
   

    @media (max-width: 767px) {
        display: none;
    }
`

export const HeaderButton = styled.button`
    flex: 1;
    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
    font-size: 14px;
    line-height: 170%;
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

    &:hover {
        color: #1fa46c;
        border-bottom: none;
    }
`

/* --- Dropdown --- */
export const DropdownWrapper = styled.div`
    position: relative;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`

export const DropdownButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #1fa46c;
    }
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin-top: 4px;
    min-width: 180px;
    z-index: 10;
`

export const DropdownItem = styled.div`
    padding: 10px 14px;
    cursor: pointer;

    &:hover {
        background: #f5f5f5;
        color: #1fa46c;
    }
`

/* --- SVG-треугольник (7x6 px) --- */
export const TriangleIcon = styled.span`
    display: inline-block;
    width: 7px;
    height: 6px;
    background: url("data:image/svg+xml;utf8,<svg width='7' height='6' viewBox='0 0 7 6' xmlns='http://www.w3.org/2000/svg'><path d='M3.5 5.5L0.468911 0.25H6.53109L3.5 5.5Z' fill='black'/></svg>")
        no-repeat center;
    background-size: contain;
    transition: transform 0.2s ease;

    ${(props) =>
        props.$open &&
        `
        transform: rotate(180deg);
    `}
`
