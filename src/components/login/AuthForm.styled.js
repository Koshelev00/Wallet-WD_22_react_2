import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 163px;
`

export const ContainerSignin = styled.div`
    display: block;
    width: 379px;
    height: 334px;
    border-radius: 30px;
`

export const Modal = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ModalBlock = styled.div`
    padding: 32px;
    display: block;
    width: 100%;
`

export const ModalTtl = styled.div`
    text-align: center;
    margin-bottom: 32px;
    font-weight: 700;
    h2 {
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0px;
        text-align: center;
        vertical-align: middle;
    }
`

export const ModalFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ModalInput = styled.input`
    padding: 10px;
    border-radius: 6px;
    border: 0.5px solid #999999;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    &:focus {
        outline: none;
        border-color: #2d2b2b;
    }

    &::placeholder {
        color: #999999;
    }
    ${(props) =>
        props.$isValid &&
        `
    background-color: #DBFFE9;
    outline: none; 
    box-shadow: 0 0 5px green; 
  `}

    ${(props) =>
        props.$isInvalid &&
        `
    background-color: #FFEBEB;
    outline: none;
    box-shadow: 0 0 5px #F25050;
  `}
`

export const ModalBtnEnter = styled.button`
    padding: 10px 20px;
    height: 39px;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 14px;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    background-color: #1fa46c;

    &:hover {
        background-color: #16784f;
    }

    &:disabled {
        background-color: #999999;
        cursor: not-allowed;
    }
`

export const ModalFormGroup = styled.div`
    text-align: center;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    color: #999999;

    p {
        margin-bottom: 5px;
    }
    a {
        color: #999999;
        text-decoration: underline;
        &:hover {
            text-decoration: underline;
            color: #4f4f4f;
        }
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8em;
`