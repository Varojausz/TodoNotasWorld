import styled from 'styled-components'

export const TestContainerRecount = styled.section`
    position: fixed;
    display: grid;
    justify-content: space-around;
    align-content: space-around;
    grid-template-rows: 1rem 1rem 1rem 1rem 1rem;
    grid-template-columns: 1rem 1rem 1rem 1rem 1rem;
    /* flex-grow: 3; */
    margin: 2rem;
    /* border: 3px solid black; */
    box-shadow: 2px 2px 4px 1px;
    border-radius: 0.5rem;
    width: 10rem;
    height: 10rem;
    
    div {
        display: flex;
        flex-grow: 1;
        /* padding: 0.5rem 0.5rem; */
        /* margin: 0 0.5rem; */
        justify-content: center;
        align-items: center;
    }
`
export const Recount = styled.div`
    //color: ${props => props.answer ? 'blue' : 'red'};
    color: ${props => props.submitted ? (props.answered === 'true' ? 'green' : 'red') : (typeof(props.answered) !== 'number' ? 'blue' : 'white')};
`
export const TestContainer = styled.section`
    position: relative;
    left: 13rem;
    display: flex;
    width: 80%;
    
    
`
export const TestContainerGlobal = styled.main`
    display: flex;
    width: 80%;
    box-sizing: border-box;

`