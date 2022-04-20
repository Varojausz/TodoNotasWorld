import styled from 'styled-components'

export const TestContainerRecount = styled.section`
    position: fixed;
    display: grid;
    justify-content: center;
    grid-template-rows: 1rem 1rem 1rem 1rem;
    grid-template-columns: 1rem 1rem 1rem 1rem 1rem;
    flex-grow: 3;
    margin: 1rem;
    border: 3px solid black;
    border-radius: 0.5rem;
    
    div {
        display: flex;
        flex-grow: 1;
        padding: 0.5rem 0.5rem;
        /* margin: 0 0.5rem; */
        font-size: 12px;
        justify-content: center;
        align-items: center;
    }
`
export const Recount = styled.div`
    //color: ${props => props.answer ? 'blue' : 'red'};
    color: ${props => props.submitted ? (props.answer === 'true' ? 'green' : 'red') : (typeof(props.answer) !== 'number' ? 'blue' : 'white')};
`
export const TestContainer = styled.section`
    position: relative;
    left: 8rem;
    display: flex;
    flex-grow: 5;
    
    
`
export const TestContainerGlobal = styled.main`
    display: flex;
    width: 80%;

`