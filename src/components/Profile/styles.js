import styled from 'styled-components'

export const ProfilePaper = styled.div`

color: rgba(0, 0, 0, 0.87);
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
background-color: #fff;
border-radius: 4px;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
margin: auto;
padding: 24px;
max-width: 648px;
margin-top: 40px;
padding-left: 24px;
padding-right: 24px;


hr {

        color: rgba(0, 0, 0, 0.87);
        list-style: none;
        border: none;
        height: 1px;
        margin: 0;
        flex-shrink: 0;
        background-color: rgba(0, 0, 0, 0.12);
    }

ul {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    padding-top: 8px;
    padding-bottom: 8px;

}

`

export const Tabs = styled.div`
    color: rgba(0, 0, 0, 0.87);
    white-space: nowrap;
    display: flex;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    background-color: #f5f5f5;


    button {
        border: 0;
        cursor: pointer;
        margin: 0;
        display: inline-flex;
        outline: 0;
        align-items: center;
        user-select: none;
        border-radius: 0;
        vertical-align: middle;
        justify-content: center;
        text-decoration: none;
        background-color: transparent;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        padding: 6px 12px;
        overflow: hidden;
        position: relative;
        font-size: 0.875rem;
        box-sizing: border-box;
        min-height: 48px;
        text-align: center;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 500;
        line-height: 1.75;
        white-space: normal;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        min-width: 160px;
        flex-grow: 1;
        max-width: none;
        flex-basis: 0;
        flex-shrink: 1;
        color: #3f4771;
        outline-color: rgb(63, 71, 113);

        span {
            cursor: pointer;
            user-select: none;
            font-size: 0.875rem;
            text-align: center;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            line-height: 1.75;
            white-space: normal;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            color: #3f4771;
            width: 100%;
            display: inline-flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        &:after {
                left: 0;
                right: 0;
                bottom: 0;
                content: "";
                position: absolute;
                border-bottom: 2px solid #3f4771;
                pointer-events: none;
            }
    }
`

export const HeaderAvatar = styled.div`

color: rgba(0, 0, 0, 0.87);
flex: 0 0 auto;
margin-right: 16px;
list-style: none;
text-align: left;
flex-shrink: 0;
width: 80px;
height: 80px;

.circular {
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    overflow: hidden;
    text-align: left;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
    max-width: 60px;
    height: 60px;
    margin: 10px;

    img {
    font-size: 1.25rem;
    line-height: 1;
    user-select: none;
    color: transparent;
    width: 100%;
    height: 100%;
    background-size: cover;
    text-align: center;
    text-align: center;
    }   
}   



`

export const HeaderProfile = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    padding-right: 16px;

`
export const HeaderContent = styled.div`


flex: 1 1 auto;
margin-top: 6px;
margin-bottom: 6px;

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





`
export const HeaderActions = styled.div`


    list-style: none;
    top: 50%;
    right: 16px;
    position: absolute;
    transform: translateY(-50%);

button {
    list-style: none;
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
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    flex: 0 0 auto;
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    color: #3f4771;

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


`

export const Date = styled.div`

width: 100%;
display: flex;
position: relative;
text-align: left;
align-items: center;
justify-content: flex-start;
padding-top: 4px;
padding-bottom: 4px;
padding-left: 16px;
padding-right: 16px;

div {
    text-align: left;
    flex: 1 1 auto;
    min-width: 0;
    margin-top: 4px;
    margin-bottom: 4px;

    p {
        text-align: left;
        margin: 0;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        color: rgba(0, 0, 0, 0.54);
        list-style: none;
    }
}

`