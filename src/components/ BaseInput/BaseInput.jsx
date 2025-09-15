/* eslint-disable react/prop-types */
import * as S from './BaseInput.styled'
function BaseInput({ error, type, name, id, placeholder, value, onChange, autoComplete, $isValid, $isInvalid }) {
    return (
      
            <S.Input 
                className={error ? 'error' : ''} 
                style={error ? { borderColor: 'red' } : {}}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                autoComplete={autoComplete}
                $isValid={$isValid}
                $isInvalid={$isInvalid}
            />
            
       
    )
}

function BaseButton({ id, text, onClick, disabled }) {
    return (
        <>
            <S.Button type='button' id={id} onClick={onClick} disabled={disabled}>
                {text}
            </S.Button>
        </>
    )
}

export { BaseInput, BaseButton }