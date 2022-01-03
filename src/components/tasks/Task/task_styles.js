import styled from 'styled-components'

export const StyledTask = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
    p {
        max-height: 30px;
        margin-bottom: 0px;
    }

`

export const StyledDiv = styled.div`
    height: 30px;
`
export const StyledContent = styled.div`
    min-height: 200px;
    display: flex;
    height: fit-content;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
`