import { theme } from '@irrigacion/theme';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './spinner.style';
import type { SpinnerProps } from './spinner.types';

const SIZE_MAP: Record<string, 'small' | 'large' | number> = {
	sm: 'small',
	md: 'large',
	lg: 48,
	xl: 64,
	'2xl': 80,
};

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', label, color, style, ...props }) => {
	const nativeSize = typeof size === 'number' ? size : (SIZE_MAP[size] ?? 'large');
	const spinnerColor = color ?? theme.colors.primary.DEFAULT;

	return (
		<View style={[styles.container, style]} {...props}>
			<ActivityIndicator size={nativeSize} color={spinnerColor} />
			{label && <Text style={styles.label}>{label}</Text>}
		</View>
	);
};
