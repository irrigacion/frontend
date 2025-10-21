import { theme } from '@irrigacion/theme';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import type { DividerProps } from './divider.types';

export const Divider: React.FC<DividerProps> = ({
	orientation = 'horizontal',
	thickness = 1,
	color,
	style,
	...props
}) => {
	const dividerColor = color ?? theme.colors.gray[200];

	const dividerStyle: ViewStyle =
		orientation === 'horizontal'
			? {
					height: thickness,
					width: '100%',
					backgroundColor: dividerColor,
				}
			: {
					width: thickness,
					height: '100%',
					backgroundColor: dividerColor,
				};

	return <View style={[dividerStyle, style]} {...props} />;
};
