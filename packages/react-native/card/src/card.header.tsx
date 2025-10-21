import React from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';
import type { CardHeaderProps } from './card.types';

export const CardHeader: React.FC<CardHeaderProps> = ({
	style,
	children,
	withBorder,
	...props
}) => {
	return (
		<View style={[styles.header, withBorder ? styles.headerBorder : {}, style]} {...props}>
			{children}
		</View>
	);
};
