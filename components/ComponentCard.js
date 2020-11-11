import styled from 'styled-components';

const StyleComponentCard = styled.div`
	max-width: 180px;
	min-height: 250px;
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		transition: all ease-in-out 0.2s;
		border: none;
		box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
			0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
	}
`;

const StyledTitle = styled.h3`
	font-weight: 400;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
	width: 100%;
	text-align: center;
	margin: 0;
	padding: 15px;
`;

const ComponentCard = ({ title, thumbnail, route }) => {
	return (
		<StyleComponentCard>
			<StyledTitle>{title}</StyledTitle>
		</StyleComponentCard>
	);
};

export default ComponentCard;
