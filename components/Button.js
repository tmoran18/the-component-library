import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 20px 40px;
	border-radius: 3px;
	background-color: ${({ theme }) => theme.colors.green};
	border: none;
	color: ${({ theme }) => theme.colors.black};
	cursor: pointer;
`;

const Button = () => {
	return <StyledButton onClick={() => alert('clicked')}>Test</StyledButton>;
};

export default Button;
