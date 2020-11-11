import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Code from '../components/Code';
import styled from 'styled-components';
import Button from '../components/Button';

export default function Home() {
	const Title = styled.p`
		font-size: ${({ theme }) => theme.fontSize.large};
		color: ${({ theme }) => theme.colors.black};
		font-weight: 300;
	`;
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Title>My page</Title>
			<Button>Test</Button>
		</div>
	);
}
