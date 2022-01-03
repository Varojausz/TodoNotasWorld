import styled from 'styled-components'

const breakpoints = {
    breakpoint1: '700px',
    breakpoint2: '300px'
}
export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
/*     display: grid; 
    grid-template-rows: auto;
    grid-template-columns: 23vw 23vw 23vw 23vw;
    gap: 5px;
    grid-auto-rows: auto; */
    width: 600px;
    

    div {
        flex-grow: 1;
    }


/*     @media screen and (max-width: 685px) {
        display: grid; 
        grid-template-rows: auto;
        grid-template-columns: 31vw 31vw 31vw;
        gap: 5px;
        grid-auto-rows: auto;
    }
    @media screen and (max-width: 500px) {
        display: grid; 
        grid-template-rows: auto;
        grid-template-columns: 46vw 46vw;
        gap: 5px;
        grid-auto-rows: auto;
    } */

`