import React from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';
import type { CardFooterProps } from './card.types';

export const CardFooter: React.FC<CardFooterProps> = ({
	style,
	withBorder,
	children,
	...props
}) => {
	return (
		<View style={[styles.footer, withBorder ? styles.footerBorder : {}, style]} {...props}>
			{children}
		</View>
	);
};
