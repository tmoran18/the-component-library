import styled from 'styled-components';

const StyledNavbar = styled.nav`
	width: 100%;
	height: 70px;
	background-color: ${({ theme }) => theme.colors.green};
	position: fixed;
	top: 0;
	z-index: 10;
	box-shadow: 0 3px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.13);
`;

const Navbar = () => {
	return <StyledNavbar>Navbar</StyledNavbar>;
};

export default Navbar;
