import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ComponentCard from '../components/ComponentCard';

const Index = () => {
	return (
		<Layout
			pageTitle='The Component Library - React & Next JS Components'
			pageDescription="A component library of Tim Moran's personally crafted components for use with React and Next JS">
			<section>
				<ComponentCard title={'Button'} />
			</section>
		</Layout>
	);
};

export default Index;

// const Title = styled.p`
// 		font-size: ${({ theme }) => theme.fontSize.large};
// 		color: ${({ theme }) => theme.colors.black};
// 		font-weight: 300;
// 	`;
