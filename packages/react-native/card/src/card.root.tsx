import { theme } from '@irrigacion/theme';
import React from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';
import type { CardProps } from './card.types';

export const Root: React.FC<CardProps> = ({ shadow = 'sm', style, children, ...props }) => {
	const shadowStyle = shadow !== 'none' ? theme.shadows[shadow] : {};
	return (
		<View style={[styles.root, styles.bordered, shadowStyle, style]} {...props}>
			{children}
		</View>
	);
};
