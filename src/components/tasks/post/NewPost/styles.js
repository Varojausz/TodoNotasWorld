import styled from 'styled-components'
export const Post = styled.div`
    color: rgba(0, 0, 0, 0.87);
    padding: 24px 0px 1px;
    background-color: #efefef;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    max-width: 100vw;
    margin: auto;
    width: 600px;
`
export const PostForm = styled.form`

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    overflow: hidden;
    margin: auto;
    max-width: 100%;
    box-shadow: none;
    margin-bottom: 24px;
    background-color: rgba(65, 150, 136, 0.09);

    margin: auto;
    width: 600px;

`

export const FormUser = styled.section`
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    padding: 16px;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;

    max-width: 100vw;
    margin: auto;
    width: 600px;

    @media screen and (max-width:400px) {
        width: 300px;
    }

    .avatar {
        color: rgba(0, 0, 0, 0.87);
        flex: 0 0 auto;
        margin-right: 16px;

        div {
            color: rgba(0, 0, 0, 0.87);
            width: 40px;
            height: 40px;
            display: flex;
            overflow: hidden;
            position: relative;
            font-size: 1.25rem;
            align-items: center;
            flex-shrink: 0;
            line-height: 1;
            user-select: none;
            border-radius: 50%;
            justify-content: center;

            img {
                font-size: 1.25rem;
                line-height: 1;
                user-select: none;
                color: transparent;
                width: 100%;
                height: 100%;
                object-fit: cover;
                text-align: center;
                text-indent: 10000px;
            }

            svg {

            }
        }
    }
    .content {
        color: rgba(0, 0, 0, 0.87);
        flex: 1 1 auto;


        span {
            color: rgba(0, 0, 0, 0.87);
            margin: 0;
            font-size: 0.875rem;
            line-height: 1.43;
            letter-spacing: 0.01071em;
            display: block;
        }
    }
`
export const FormField = styled.section`
    color: rgba(0, 0, 0, 0.87);
    padding: 16px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: white;

    max-width: 100vw;
    margin: auto;
    width: 600px;

    @media screen and (max-width:400px) {
        width: 300px;
    }

    article {
        color: rgba(0, 0, 0, 0.87);
        border: 0;
        display: inline-flex;
        padding: 0;
        position: relative;
        min-width: 0;
        flex-direction: column;
        vertical-align: top;
        margin-top: 16px;
        margin-bottom: 8px;
        width: 90%;
        margin-left: 16px;
        margin-right: 16px; 

        .textarea-container {
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
            padding: 6px 0 7px;
            position: relative;
            
            textarea {
                outline: none;
            }

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
            &:before:hover, &:before:focus {
                border-bottom: 2px solid rgba(0, 0, 0, 0.87);
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
            &:after:focus {
                transform: scaleX(1);
            }

            textarea {
                font: inherit;
                color: currentColor;
                width: 100%;
                border: 0;
                margin: 0;
                display: block;
                min-width: 0;
                background: none;
                box-sizing: content-box;
                animation-name: mui-auto-fill-cancel;
                letter-spacing: inherit;
                animation-duration: 10ms;
                -webkit-tap-highlight-color: transparent;
                height: auto;
                resize: none;
                padding: 0;
            }
        }
    }
    input {
        display: none;
    }

    label {
        color: rgba(0, 0, 0, 0.87);
        display: block;
        width: fit-content;

        span {
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
            background-color: transparent;
            flex: 0 0 auto;
            padding: 12px;
            overflow: visible;
            font-size: 1.5rem;
            text-align: center;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            border-radius: 50%;
            color: 'white';
            min-height: 30px;
            margin-bottom: 5px;
        }
    }

    span {
        color: rgba(0, 0, 0, 0.87);
        vertical-align: super;
    }


`
export const FormSubmit = styled.section`
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    padding: 8px;
    align-items: center;

    max-width: 100vw;
    margin: auto;
    width: 600px;

    @media screen and (max-width:400px) {
        width: 300px;
    }

    button {
        border: 0;
        display: inline-flex;
        outline: 0;
        position: relative;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
        text-decoration: none;
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        margin: 16px;
        cursor: ${props => !props.values.content ? 'default' : 'pointer'};
        box-shadow: none;
        background-color: ${props => !props.values.content ? 'rgba(0, 0, 0, 0.12)' : '#3f4771'};
        color: ${props => !props.values.content ? 'rgba(0, 0, 0, 0.26)' : '#fff'};

        &:hover {
            box-shadow: ${props => !props.values.content ? 'none' :' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'};
            background-color: ${props => !props.values.content ? 'rgba(0, 0, 0, 0.12)' : '#2e355b'};
        }

/*         span {
            user-select: none;
            font-weight: 500;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            cursor: default;
            pointer-events: none;
            width: 100%;
            display: inherit;
            align-items: inherit;
            justify-content: inherit;
        } */
        .root {
            cursor: pointer;
            user-select: none;
            font-weight: 500;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            color: #fff;
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
        
    }
`