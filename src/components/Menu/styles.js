import styled from 'styled-components'

export const MenuStyle = styled.nav`
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    width: 100%;
    display: flex;
    z-index: 1100;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    color: #fff;
    background-color: #3f4771;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: ${(props) => props.headerHeight || '3rem'};


    a {
        text-decoration: none;
        color: #061d95;
    }
    button {
        height: 100%;
    }

    .ToggleButton {
        display: none;
        background-color: #3f4771;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);

        @media screen and (max-width: 700px) {
            position: absolute;
            right: 0;
            display: flex;
            width: 42px;
            flex-direction: column;
            justify-content: center;
            height: 48px;
        }

        justify-content: space-between;
    }
    }

    .title {
            margin: 0;
            display: inline-flex;
            align-items: center;
            padding: 6px 8px;
            font-size: 1.25rem;
    
            font-weight: 500;
            line-height: 1.6rem;
            letter-spacing: 0.0075em;
            color: inherit;
        }
`
export const MenuHomeStyle = styled.button`
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: #3f4771;
    flex: 0 0 auto;
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    color: rgb(255, 255, 255);

    &:hover {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.2);
    }

    div {
        color: #fff;
        display: flex;
        position: relative;
        align-items: center;
        padding-left: 24px;
        padding-right: 24px;
        min-height: 64px;


    }
    .Icon-label{
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        font-size: 1.5rem;
        text-align: center;
        color: ${props => props.color};
        width: 100%;
        display: flex;
        align-items: inherit;
        justify-content: inherit;

            svg {
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                text-align: center;
                color: ${props => props.color};
                fill: currentColor;
                width: 1em;
                height: 1em;
                display: inline-block;
                font-size: 1.5rem;
                transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                flex-shrink: 0;
                user-select: none;
            }
    }
    .root {
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        font-size: 1.5rem;
        text-align: center;
        color: rgb(255, 255, 255);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        position: absolute;
        border-radius: inherit;
        pointer-events: none;
    }
`
export const MenuButtonStyle = styled.button`
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: #3f4771; 
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 6px 8px;
    color: #ffffff;

    &:hover {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .Button-label{
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        font-size: 0.875rem;

        font-weight: 500;
        line-height: 1.75;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        color: ${props => props.color};
        width: 100%;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
    }

    .root {
        cursor: pointer;
        user-select: none;
        font-size: 1.5rem;
        text-align: center;
        color: rgb(255, 255, 255);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        position: absolute;
        border-radius: inherit;
        pointer-events: none;
    }
`

export const ToggleContent = styled.section`
    position: relative;
    display: flex;
    
    

    @media screen and (max-width: 700px) {
        position: absolute;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
        display: ${(props) => props.toggle ? 'flex' : 'none'};
        flex-direction: column;
        top: ${(props) => props.headerHeight || '3rem'};
        right: 0vw;
        width: 90px;
        
        a, span, button {
            width: 90px;
        }

        a:hover, button:hover {
            background-color: #2e355b;
        }

        div {
            border-right: 0px;
        }

        span {
            display: flex;
            flex-direction: column;
        }
    }


    
`




