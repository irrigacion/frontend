import React from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';
import type { CardBodyProps } from './card.types';

export const CardBody: React.FC<CardBodyProps> = ({ style, children, ...props }) => {
	return (
		<View style={[styles.body, style]} {...props}>
			{children}
		</View>
	);
};
