import styled from 'styled-components'

export const TestContainerOption = styled.article`
    margin: 1rem;
    /* border: 4px solid black; */
    box-shadow: 2px 2px 5px 2px;
    border-radius: 0.8rem;
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.submitted && (props.answered === 'true' ? 'lightgreen' : '#ff6347')};

    .marco {
        background-color: #3f4771;
        height: 3rem;
    }
    .superior {
        background-color: #3f4771;
        height: 3rem;
        margin-bottom: 1rem;
        border-top-left-radius: 0.45rem;
        border-top-right-radius: 0.45rem;
    }
    .inferior {
        background-color: #3f4771;
        height: 3rem;
        margin-top: 1rem;
        border-bottom-left-radius: 0.45rem;
        border-bottom-right-radius: 0.45rem;
    }
    

    input {
        margin-right: 1.5rem;
    }
`
export const TestRadioDiv = styled.div`
    padding: 0.5rem;
    padding-left: 2rem;
`

export const TestContainerCounter = styled.article`
    display: flex;
    flex-direction: column;
    width: 10%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
/*     padding: 0 0.5rem; */
    /* border: 2px solid black; */
    border-radius: 0.8rem;
    font-weight: 800;
    box-shadow: 2px 2px 5px 2px;

    .marco {
        background-color: #3f4771;
        height: 3rem;
        width: 100%;
    }
    .superior {
        background-color: #3f4771;
        height: 3rem;
        margin-bottom: 1rem;
        border-top-left-radius: 0.45rem;
        border-top-right-radius: 0.45rem;
    }
    .inferior {
        background-color: #3f4771;
        height: 3rem;
        margin-top: 1rem;
        border-bottom-left-radius: 0.45rem;
        border-bottom-right-radius: 0.45rem;
    }
`
