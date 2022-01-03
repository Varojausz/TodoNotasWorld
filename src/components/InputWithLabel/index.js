import React, {useRef} from 'react'
import useFocusHover from '../../assets/CustomHooks/useFocusHover';
import {InputWithLabelStyle} from './styles'

const InputWithLabel = ({id,label,type='text',handleChange, children, value}) => {
    const [focus, handleFocus, handleFocusOut, hover, handleHover, handleHoverOut] = useFocusHover();
    const inputRef = useRef('');
    return (
        <InputWithLabelStyle color={"green"} focus={focus} hover={hover}>
            <label className={(focus || (inputRef.current.value !=='')) ? "shrink" : ""} label={label} htmlFor={id}>{children}</label>
            <div>
                <input ref={inputRef} onMouseOut={handleHoverOut} onMouseOver={handleHover} onFocus={handleFocus} onBlur={handleFocusOut} className="input" onChange={handleChange} type={type} aria-invalid="false" id={id} value={value}></input>
            </div>
        </InputWithLabelStyle>
    )
}

export default InputWithLabel