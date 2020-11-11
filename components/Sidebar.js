import styled from 'styled-components';

const StyledSidebar = styled.nav`
	width: 340px;
	height: 100%;
	position: sticky;
	border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
	padding-top: 70px;
	padding-bottom: 180px;
	position: fixed;
	z-index: 1;
	&:hover {
		overflow: scroll;
	}
`;

const Sidebar = () => {
	return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;
