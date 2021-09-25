import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const SiteHeader = () => {
	return (
		<Header className='site-header'>
			<nav>
				<Link to='/'>
					<Header as='h2'>Montana Mountain Retreats</Header>
				</Link>
				<div className='nav-links'>
					<Link to='/schedule'> Schedule Retreat</Link>
				</div>
			</nav>
		</Header>
	);
};

export default SiteHeader;
