import styled from 'styled-components'

export const CommentContainer = styled.section`
    margin: auto;
    width: 600px;

    @media screen and (max-width:400px) {
        width: 100%;
        margin: none;
    }
    .comment-field {
        display: flex;
        padding: 16px;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: #f2f5f4;
        height: 56px;

        .avatar {
            flex: 0 0 auto;
            margin-right: 16px;

            div {
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
                width: 25px;
                height: 25px;

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
            }
        }

        .content {
            flex: 1 1 auto;
            height: 56px;
            

            span {
                color: rgba(0, 0, 0, 0.87);
                margin: 0;
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.43;
                letter-spacing: 0.01071em;
                display: block;
                height: inherit;

                div {
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 0.875rem;
                    font-weight: 400;
                    line-height: 1.43;
                    letter-spacing: 0.01071em;
                    border: 0;
                    margin: 0;
                    display: inline-flex;
                    padding: 0;
                    position: relative;
                    min-width: 0;
                    flex-direction: column;
                    vertical-align: top;
                    margin-top: 10px;
                    margin-bottom: 8px;
                    width: 96%;
                    min-height: 32px;

                    div {
                        color: rgba(0, 0, 0, 0.87);
                        cursor: text;
                        display: inline-flex;
                        font-size: 1rem;
                        box-sizing: border-box;
                        align-items: center;
                        font-weight: 400;
                        line-height: 1.1876em;
                        letter-spacing: 0.00938em;
                        padding: 6px 0 7px;
                        position: relative;
                        margin: 0;

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
                            resize: none;
                            padding: 0;
                            height: 19px;
                            overflow: hidden;
                            min-height: 19px;
                        }

                        textarea:focus {
                            outline: 0;
                        }

                        textarea::placeholder {
                            color: rgba(0, 0, 0, 0.30);
                        }

                        textarea:last-child {
                            font: inherit;
                            color: currentColor;
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
                            resize: none;
                            padding: 0;
                            visibility: hidden;
                            position: absolute;
                            overflow: hidden;
                            height: 0px;
                            top: 0px;
                            left: 0px;
                            transform: translateZ(0px);
                            width: 505.906px;
                        }

                        &:before {
                            left: 0;
                            right: 0;
                            bottom: 0;
                            content: "";
                            position: absolute;
                            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                            border-bottom: ${props => (props.hover || props.focus) ? '2px solid rgba(0, 0, 0, 0.87)' : '1px solid rgba(0, 0, 0, 0.42)'};
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


                    }
                }
            }
        }
    }

    .label {
            cursor: pointer;
            color: rgba(0, 0, 0, 0.70);
            user-select: none;
            font-size: 1.5rem;
            text-align: center;
            width: 100%;
            display: flex;

            svg {
                color: inherit;
                fill: currentColor;
            }
        }

    .comment {
        display: flex;
        padding: 16px;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: #f2f5f4;

        .avatar {
            flex: 0 0 auto;
            margin-right: 16px;

            div {
                color: rgba(0, 0, 0, 0.87);
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
                width: 25px;
                height: 25px;

                img {
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
                    width: 25px;
                    height: 25px;
                }
            }
        }
        .content {
            flex: 1 1 auto;

            span {
                margin: 0;
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.43;
                letter-spacing: 0.01071em;
                display: block;

                p {
                    font-size: 0.875rem;
                    font-weight: 400;
                    line-height: 1.43;
                    letter-spacing: 0.01071em;
                    margin: 2px 16px 2px 2px;
                    padding: 8px;
                    background-color: white;
                    
                    a {
                        line-height: 1.43;
                        letter-spacing: 0.01071em;
                        text-decoration: none;
                        color: #061d95;
                    }

                    span {
                        color: gray;
                        display: block;
                        font-size: 0.8em;

                        span {
                            color: gray;
                            line-height: 1;
                            letter-spacing: normal;
                            text-transform: none;
                            display: inline-block;
                            white-space: nowrap;
                            word-wrap: normal;
                            width: 1em;
                            height: 1em;
                            overflow: hidden;
                            flex-shrink: 0;
                            user-select: none;
                            cursor: pointer;
                            font-size: 1.6em;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        
        .action {
            flex: 0 0 auto;
            align-self: flex-start;
            margin-top: 10px;
            margin-right: -6px;

            button {
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

                .label {
                    cursor: pointer;
                    color: rgba(0, 0, 0, 0.54);
                    user-select: none;
                    font-size: 1.5rem;
                    text-align: center;
                    width: 100%;
                    display: flex;

                    svg {
                        color: inherit;
                        fill: currentColor;
                    }
                }

                .root {
                    cursor: pointer;
                    user-select: none;
                    font-size: 1.5rem;
                    text-align: center;
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
        }   }

    }
`