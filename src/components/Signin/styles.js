import styled from 'styled-components'

export const FormStyle = styled.form`
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    overflow: hidden;
    margin: auto;
    max-width: 600px;
    margin-top: 40px;
    text-align: center;
    padding-bottom: 16px;

`

export const SectionFieldStyle = styled.section`
    text-align: center;
    padding: 16px;

        h6 {
            text-align: center;
            margin: 0;
            font-size: 1.25rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 0.0075em;
            color: #3f4771;
            margin-top: 16px;
        }


`
export const InputWithLabelFieldStyle = styled.div`
        color: rgba(0, 0, 0, 0.87);
        text-align: center;
        border: 0;
        display: inline-flex;
        padding: 0;
        position: relative;
        min-width: 0;
        flex-direction: column;
        vertical-align: top;
        margin-top: 16px;
        margin-bottom: 8px;
        width: 300px;
        margin-left: 8px;
        margin-right: 8px;

        label {
            text-align: center;
            color: rgba(0, 0, 0, 0.54);
            padding: 0;
            font-size: 1rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            line-height: 1;
            letter-spacing: 0.00938em;
            display: block;
            transform-origin: top left;
            top: 0;
            left: 0;
            position: absolute;
            transform: translate(0, 24px) scale(1);
            transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

            
        }

        .shrink {
            color: #3f4771;
            transform: translate(0, 1.5px) scale(0.75);
            transform-origin: top left;
        }

        div {
            text-align: center;
            color: rgba(0, 0, 0, 0.87);
            cursor: text;
            display: inline-flex;
            font-size: 1rem;
            box-sizing: border-box;
            align-items: center;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            line-height: 1.1876em;
            letter-spacing: 0.00938em;
            position: relative;
            margin-top: 16px;

            &:before {
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            position: absolute;
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            border-bottom: ${props => (props.focus || props.hover) ? '2px solid rgba(0, 0, 0, 0.87)' : '1px solid rgba(0, 0, 0, 0.42)'};
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

export const InvalidSubmit = styled.p`
    text-align: center;
    margin: 0;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: #f44336;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionSubmitStyle = styled.section`
    color: rgba(0, 0, 0, 0.87);
    text-align: center;
    display: flex;
    padding: 8px;
    align-items: center;

    button {
        border: 0;
        cursor: pointer;
        display: inline-flex;
        outline: 0;
        position: relative;
        align-items: center;
        user-select: none;
        vertical-align: middle;
        justify-content: center;
        text-decoration: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
        color: #fff;
        background-color: #3f4771;
        margin: auto;
        margin-bottom: 16px;

        &:active {
            box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
        }

        &:hover {
            box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
            background-color: #2e355b;
        }
`

