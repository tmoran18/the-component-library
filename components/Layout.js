import Head from 'next/head';
import Header from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children, pageTitle, pageDescription, ...props }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, intial-scale=1' />
				<title>{pageTitle}</title>
				<meta name='description' content={pageDescription}></meta>
				<link rel='shortcut icon' href='/favicon.png' />
			</Head>
			<section className='container'>
				<Header />
				<Sidebar />
				<main>{children}</main>
				<Footer />
			</section>
			<style jsx>{`
				.container {
					height: 100vh;
					display: flex;
					flex-direction: column;
				}
				main {
					margin-left: 340px;
					margin-top: 100px;
				}
			`}</style>
		</>
	);
};

export default Layout;
