import React from 'react';
import {
	TouchableOpacity,
	Text,
	type TouchableOpacityProps,
	type StyleProp,
	type ViewStyle,
	type TextStyle,
} from 'react-native';
import { styles } from './button.style';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends TouchableOpacityProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	disabled,
	children,
	style,
	...props
}) => {
	const containerStyles: StyleProp<ViewStyle> = [
		styles.baseContainer,
		styles[`${variant}Container`],
		styles[`${size}Container`],
		disabled && styles.disabledContainer,
		style,
	];

	const textStyles: StyleProp<TextStyle> = [
		styles.baseText,
		styles[`${variant}Text`],
		styles[`${size}Text`],
	];

	return (
		<TouchableOpacity
			style={containerStyles}
			disabled={disabled}
			activeOpacity={0.8}
			{...props}
		>
			<Text style={textStyles}>{children}</Text>
		</TouchableOpacity>
	);
};
