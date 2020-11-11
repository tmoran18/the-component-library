import '../styles/globals.css';

import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		green: '#52D46F',
		darkGreen: '#6ebb7f',
		lightGrey: '#D9D9D9',
		black: '#353535',
		white: '#ffffff',
	},
	fonts: ['Oxygen', 'sans-serif', 'Roboto'],
	fontSize: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
