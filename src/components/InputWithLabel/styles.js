import styled from 'styled-components'

export const InputWithLabelStyle = styled.div`
text-align: center;
display: inline-flex;
position: relative;
flex-direction: column;
box-sizing: border-box;
vertical-align: top;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;

color: ${props=>props.theme.color5 || "rgba(0, 0, 0, 0.87)"};
padding: ${props=>props.padding || props.theme.InputWithLabel?.padding || 0};
border: ${props=>props.border || props.theme.InputWithLabel?.border || 0};
margin: ${props=>props.margin || props.theme.InputWithLabel?.margin || "16px 8px 8px 8px"};
width: ${props=>props.width || props.theme.InputWithLabel?.width || "300px"};



/* .hoverOrFocused {
    &:before {
        content: "";
        position: absolute;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        pointer-events: none;

        border-bottom: 2px solid inherit;
        left: ${props=>props.hover.left || props.theme.InputWithLabel?.hover.left || 0};
        right: ${props=>props.hover.right || props.theme.InputWithLabel?.hover.right || 0};
        bottom: ${props=>props.hover.bottom || props.theme.InputWithLabel?.hover.bottom || 0};
    }
} */

label {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
    display: block;
    transform-origin: top left;

    position: absolute;
    transform: translate(0, 24px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    color: ${props=>props.theme.color5 || "rgba(0, 0, 0, 0.54)"};
    padding: ${props=>props.label?.padding || props.theme.InputWithLabel?.label.padding || 0};
    top: ${props=>props.label?.top || props.theme.InputWithLabel?.label.top || 0};
    left: ${props=>props.label?.left || props.theme.InputWithLabel?.label.left || 0};

}

.shrink {
    transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
    color: ${props=>props.theme.color3 || "#3f4771"};
}

div {
    cursor: text;
    display: inline-flex;
    position: relative;

    margin: ${props=>props.margin || props.theme.InputWithLabel?.margin || "16px 0px 0px 0px"};

    &:before {
    left: ${props=>props.hover.left || props.theme.InputWithLabel?.hover.left || 0};
    right: ${props=>props.hover.right || props.theme.InputWithLabel?.hover.right || 0};
    bottom: ${props=>props.hover.bottom || props.theme.InputWithLabel?.hover.bottom || 0};
    content: "";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: ${props => (props.focused || props.hover) ? '2px solid rgba(0, 0, 0, 0.87)' : '1px solid rgba(0, 0, 0, 0.42)'};
    pointer-events: none;
    }


    &:after {
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        position: absolute;
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
        border-bottom: 2px solid #3f4771;
        pointer-events: none;
    }

    input {
        font: inherit;
        color: currentColor;
        width: 100%;
        border: 0;
        height: 1.1876em;
        margin: 0;
        display: block;
        padding: 6px 0 7px;
        min-width: 0;
        background: none;
        box-sizing: content-box;
        animation-name: mui-auto-fill-cancel;
        letter-spacing: inherit;
        animation-duration: 10ms;
        -webkit-tap-highlight-color: transparent;

        &:focus {
            outline: 0;
        }

    }
}
`