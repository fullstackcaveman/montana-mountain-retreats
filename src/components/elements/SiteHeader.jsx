import { Link } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';

const SiteHeader = () => {
	return (
		<Header className='site-header'>
			<nav>
				<Link to='/'>
					<Image src='https://res.cloudinary.com/fullstackcaveman/image/upload/v1632591647/Montana%20Mountain%20Retreats/Montana_Mountain_Retreats_Logo_-_site_logo_r0rsn4.png' />
				</Link>
				<div className='nav-links'>
					<Link to='/schedule'> Schedule Retreat</Link>
				</div>
			</nav>
		</Header>
	);
};

export default SiteHeader;
