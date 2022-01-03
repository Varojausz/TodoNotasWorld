import styled from 'styled-components'

export const SidebarStyle = styled.div`
    display: ${props => (props.sidebar1?.display || props.sidebar2?.display)? 'flex' : 'none'};
    background: ${props => (props.sidebar1?.background || props.sidebar2?.background) || "yellow"};
    padding: ${props => (props.sidebar1?.padding || props.sidebar2?.padding) || "1rem"};
    position: relative;
`

export const LayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    min-height: 100vh;

        .header {
            background: green;
            padding: 1rem;
        }

        .main {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            margin-top: ${(props) => props.headerHeight || '3rem'};

            .sidebar1 {
                background: brown;
                padding: 1rem;
            }
            .content {
                flex-grow: 1;
                /* width: calc(100% - 4rem); */
            }
            .sidebar2 {
                background: yellow;
                padding: 1rem;
            }
        }

        .footer {
            background-color: #3f4771;
            padding: 1rem;
            margin-top: auto;
        }

`



