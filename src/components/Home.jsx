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
						<div className='btn-container'>
							<div className='buttons'>
								<a href='https://shop.montanamountainretreats.com'>
									<Button animated='fade' primary size='big' fluid>
										<Button.Content visible>
											<Icon name='cart' size='large' />
										</Button.Content>
										<Button.Content hidden>SHOP</Button.Content>
									</Button>
								</a>
							</div>
						</div>
						{/* <Button
							circular
							icon={<Icon name='angle double down' size='large' />}
							inverted
							color='black'
							onClick={handleClick}
						/> */}
						<p>Main Site is Under Construction</p>
						<p>But The Web Store is Operational!</p>
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
