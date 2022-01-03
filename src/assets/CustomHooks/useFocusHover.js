import {useState} from 'react'

const useFocusHover = () => {
    const [focus,setFocus] = useState(false);
    const [hover,setHover] = useState(false);
  
    const handleFocus = () => setFocus(true);
    const handleFocusOut = () => setFocus(false);
  
    const handleHover = () => setHover(true);
    const handleHoverOut = () => setHover(false);
    const handleDelay = () => setTimeout(handleHoverOut,200);

    return [focus, handleFocus, handleFocusOut, hover, handleHover, handleDelay]
}

export default useFocusHover