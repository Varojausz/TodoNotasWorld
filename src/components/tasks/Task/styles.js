import styled from 'styled-components'
export const PostContainer = styled.div`
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    overflow: hidden;
    margin: auto;
    /* width: 600px; */
    margin-bottom: 48px;
    background-color: rgba(0, 0, 0, 0.06);

    hr {
        border: none;
        height: 1px;
        margin: 0;
        flex-shrink: 0;
        background-color: rgba(0, 0, 0, 0.12);
    }

`

export const PostHeader = styled.section`
    display: flex;
    padding: 16px;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #f2f5f4;
    max-width: 100vw;
    margin: auto;
    width: 600px;

    @media screen and (max-width:400px) {
        width: 100%;
        margin: none;
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
        }

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
    .content {
        flex: 1 1 auto;

        .title {
            margin: 0;
            display: block;
            font-weight: 400;

            a {
                text-decoration: none;
                color: #061d95;
                font-size: 0.875rem;
            }
        }

        .data {
            margin: 0;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.43;
            letter-spacing: 0.01071em;
            color: rgba(0, 0, 0, 0.54);
            display: block;
        }

    }
    .action {
        flex: 0 0 auto;
        align-self: flex-start;
        margin-top: -8px;
        margin-right: -8px;

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
        }
    }

`
export const PostContent = styled.section`
        padding: 16px 0px;
        background-color: white;
        width: 600px;
        max-width: 100vw;
        margin: auto;

        @media screen and (max-width:400px) {
        width: 100%;
        margin: none;
        }

        p {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: 0.00938em;
            margin: 16px;
        }

        div {
            padding: 8px;
            text-align: center;
            background-color: #f2f5f4;

            img {
                text-align: center;
                /* height: 200px; */
                /* max-height: 400px; */
                height: auto;
                width: 70%;
                
            }
        }
`
export const PostActions = styled.section`
    display: flex;
    padding: 8px;
    align-items: center;
    /* max-width: 100vw; */
    margin: auto;
    width: 600px;
    background-color: rgb(242, 245, 244);

    @media screen and (max-width:400px) {
        width: 100%;
        margin: none;
    }

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
            user-select: none;
            font-size: 1.5rem;
            text-align: center;
            width: 100%;
            display: flex;
            align-items: inherit;
            justify-content: inherit;
            color: #ff4081;

            svg {
                fill: currentColor;
            }
        }

        .root {
            cursor: pointer;
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
    }
`
