import { Button, Header, Icon } from 'semantic-ui-react';

const Home = () => {
	const handleClick = () => {
		console.log('clicked');
	};
	return (
		<>
			<div className='hero-section'>
				<div className='overlay'>
					<div className='image'></div>
					<div className='hero-section-content'>
						<img
							className='hero-section-logo'
							src='https://res.cloudinary.com/fullstackcaveman/image/upload/v1632603043/Montana%20Mountain%20Retreats/Montana_Mountain_Retreats_Logo_-_site_logo_cgkbmk.png'
							alt='Montana Mountain Retreats'
						/>
						<p>"Where Friends Gather and Creativity Lives"</p>
						<Button
							circular
							icon={<Icon name='angle double down' size='large' />}
							inverted
							color='black'
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
			<section id='schedule' className='schedule-section'>
				<div className='heading'>
					<Header as='h1'>Montana Mountain Retreats</Header>
				</div>
			</section>
		</>
	);
};

export default Home;
