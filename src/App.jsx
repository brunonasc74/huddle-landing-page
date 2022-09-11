import { ThemeProvider } from 'styled-components';
import theme from './components/styles/theme';
import GlobalStyles from './components/styles/GlobalStyles';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Card from './components/Card';
import content from './content';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Header />
				<Container>
					{content.map((item, index) => {
						return <Card key={index} item={item} />;
					})}
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
