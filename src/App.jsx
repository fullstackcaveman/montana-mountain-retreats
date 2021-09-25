import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/elements/Footer';

function App() {
	return (
		<>
			<div className='main-content'>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</div>
			<Footer />
		</>
	);
}

export default App;
