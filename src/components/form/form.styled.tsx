import styled from "styled-components";

export const Form = styled.form<{
        theme: 'light' | 'dark'
    }>`
    color: ${({theme}) => theme === 'dark' ? 'white' : 'black'};
    background-color: ${({theme}) => theme === 'dark' ? 'black' : 'white'};
`;