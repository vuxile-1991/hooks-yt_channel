import './Button.css';
import React from 'react';

const ButtonSwipe = () => {
	return (
		<div className='btn-swipe ui animated button black inverted' tabIndex='1'>
			<div className='visible content'>White</div>
			<div className='hidden content'>
				<i>Black</i>
			</div>
		</div>
	);
};

export default ButtonSwipe;
