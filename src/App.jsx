import { Route, Switch } from 'react-router-dom';
import SiteHeader from './components/elements/SiteHeader';
import Home from './components/Home';
import Footer from './components/elements/Footer';
import 'semantic-ui-css/semantic.min.css';
import './styles/main.css';

function App() {
	return (
		<>
			<div className='main-content'>
				<SiteHeader />
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</div>
			<Footer />
		</>
	);
}

export default App;
