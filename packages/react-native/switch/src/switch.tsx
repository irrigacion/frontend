import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { styles } from './switch.style';
import type { SwitchProps } from './switch.types';

export const Switch: React.FC<SwitchProps> = ({
	value,
	defaultValue = false,
	onValueChange,
	label,
	disabled,
	size = 'md',
	style,
	...props
}) => {
	// States
	const [internalValue, setInternalValue] = useState(defaultValue);
	const isControlled = value !== undefined;
	const isOn = isControlled ? value : internalValue;

	// Animacion
	const animValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

	useEffect(() => {
		Animated.timing(animValue, {
			toValue: isOn ? 1 : 0,
			duration: 200,
			useNativeDriver: false,
		}).start();
	}, [isOn, animValue]);

	// Sizes
	const trackStyle = size === 'sm' ? styles.sizeSmTrack : styles.sizeMdTrack;
	const thumbStyle = size === 'sm' ? styles.sizeSmThumb : styles.sizeMdThumb;
	const labelStyle = size === 'sm' ? styles.sizeSmLabel : styles.sizeMdLabel;

	const thumbPosition = animValue.interpolate({
		inputRange: [0, 1],
		outputRange: [
			0,
			(trackStyle.width ?? 0) -
				(thumbStyle.width ?? 0) -
				(trackStyle.paddingHorizontal ?? 0) * 2,
		],
	});

	// Handlers
	const handlePress = () => {
		if (disabled) return;

		const newValue = !isOn;
		if (!isControlled) setInternalValue(newValue);
		onValueChange?.(newValue);
	};

	return (
		<TouchableOpacity
			style={[styles.container, disabled && styles.disabled, style]}
			onPress={handlePress}
			activeOpacity={1}
			disabled={disabled}
			{...props}
		>
			<Animated.View style={[styles.track, trackStyle, isOn && styles.trackOn]}>
				<Animated.View
					style={[
						styles.thumb,
						thumbStyle,
						{ transform: [{ translateX: thumbPosition }] },
					]}
				/>
			</Animated.View>
			{label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
		</TouchableOpacity>
	);
};
