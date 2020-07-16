import React from 'react';
import Colors from '../../constants/Colors';

const Header = props => {
	return (
		<div style={{backgroundColor: Colors.headerColor, height: 30}}>
			Header is fixed
		</div>
	);
}

export default Header;