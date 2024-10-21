import { useEffect, useState } from 'react';

function Hero() {
	const heroImage = require('../assets/hero-background.svg').default
	const btnArrow = require('../assets/arrow_medium.svg').default
	const pageCorner = require('../assets/page-corner.svg').default

	const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth <= 768);

	const handleResize = () => {
		setIsMobileView(window.innerWidth <= 768);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	
	return (
		<div className='hero'>
			<img
				className='hero__image'
				src={heroImage}
				alt="furniture illustration"
			/>
			{isMobileView && (
				<div className="hero__text-wrapper">
					<p>Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.</p>
					<a href="#kalkulaator" className='hero__btn'>Loe lisa <img src={btnArrow} alt="arrow down" /></a>
				</div>
			)}
			<div className='hero__text'>
				<h1 className='hero__text-heading'>Kas sinu diivan on oma aja ära elanud?</h1>
				{!isMobileView && (
				<div className="hero__text-wrapper">
					<p>Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.</p>
					<a href="#kalkulaator" className='hero__btn'>Loe lisa <img src={btnArrow} alt="arrow down" /></a>
				</div>
				)}
				<img className="hero__text-corner" src={pageCorner} alt="page corner turn" />
			</div>
		</div>
	)
}

export default Hero