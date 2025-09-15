
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6;
`

export const Input = styled.input`
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


export const Button = styled.button`
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

export const Text = styled.p`
    text-align: center;
    font-size: 14px;
    color: #6b7280;
    margin-top: 12px;
`