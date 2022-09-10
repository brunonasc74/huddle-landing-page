import { ThemeProvider } from 'styled-components';
import theme from './components/styles/theme';
import GlobalStyles from './components/styles/GlobalStyles';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Header />
				<Container>
					<h1>Hello</h1>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
