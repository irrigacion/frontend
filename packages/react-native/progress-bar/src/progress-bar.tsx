import { theme } from '@irrigacion/theme';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from './progress-bar.styles';
import type { ProgressBarProps } from './progress-bar.types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
	value,
	size = 'md',
	color,
	showLabel = false,
	animationDuration = 300,
	label,
	style,
	...props
}) => {
	const clampedValue = Math.max(0, Math.min(100, value));

	const widthAnim = useRef(new Animated.Value(clampedValue)).current;

	useEffect(() => {
		Animated.timing(widthAnim, {
			toValue: clampedValue,
			duration: animationDuration,
			useNativeDriver: false,
		}).start();
	}, [clampedValue, animationDuration, widthAnim]);

	const widthInterpolation = widthAnim.interpolate({
		inputRange: [0, 100],
		outputRange: ['0%', '100%'],
	});

	const trackSizeStyle = styles[size];
	const indicatorColor = color ?? theme.colors.primary.DEFAULT;

	return (
		<View style={[styles.track, trackSizeStyle, style]} {...props}>
			<Animated.View
				style={[
					styles.indicator,
					{ backgroundColor: indicatorColor, width: widthInterpolation },
				]}
			/>
			{(showLabel || label) && (
				<View style={styles.labelContainer}>
					{typeof label === 'function' && label(clampedValue)}
					{typeof label === 'string' && <Text style={styles.label}>{label}</Text>}
					{!label && <Text style={styles.label}>{`${Math.round(clampedValue)}%`}</Text>}
				</View>
			)}
		</View>
	);
};
