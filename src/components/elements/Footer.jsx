const Footer = () => {
	const todaysDate = new Date();
	console.log(todaysDate.getFullYear());

	return (
		<div className='footer'>
			<p>&copy;{todaysDate.getFullYear()} Montana Mountain Retreats</p>
			<p>
				Site Designed and Developed by:{' '}
				<a href='https:fullstackcaveman.com' target='_blank' rel='noreferrer'>
					FullStackCaveman
				</a>
			</p>
		</div>
	);
};

export default Footer;
