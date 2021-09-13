import styled from 'styled-components';

const Button = styled.button<{
    rounded?: boolean,
    fontWeight?: number,
    primary?: boolean
}>`
    padding: 5px;
    border: 1px solid black;
    border-radius: ${({rounded}) => rounded ? '50px' : '0' };
    font-weight: ${({fontWeight}) => fontWeight || 400 };
    background-color: ${({primary}) => primary ? `rgb(0, 126, 255)` : 'white'};
    color: ${({primary}) => primary ? 'white' : 'rgb(0,126,255)'}
`;

export default Button;