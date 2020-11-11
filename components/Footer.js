import styled from 'styled-components';

const StyledFooter = styled.footer`
	width: 100%;
	min-height: 100px;
	margin-top: auto;
	background-color: ${({ theme }) => theme.colors.green};
	z-index: 10;
`;

const Footer = () => {
	return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
