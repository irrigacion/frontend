import { theme } from '@irrigacion/theme';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Animated, StyleProp, TextInput, TextStyle, View } from 'react-native';
import { styles } from './input.style';
import { InputProps } from './input.types';

export const Input = forwardRef<TextInput, InputProps>(
	({ label, style, isError, withAnimation, ...props }, ref) => {
		const [isFocused, setIsFocused] = useState(false);

		const labelAnim = useRef(new Animated.Value(0)).current;

		const shouldFloat = !withAnimation || isFocused || (props.value && props.value.length > 0);

		const placeholder = withAnimation
			? isFocused
				? props.placeholder
				: ''
			: props.placeholder;

		const labelStyle = {
			top: labelAnim.interpolate({
				inputRange: [0, 1],
				outputRange: [10, -10],
			}),
			fontSize: labelAnim.interpolate({
				inputRange: [0, 1],
				outputRange: [16, 12],
			}),
			color: isError
				? theme.colors.danger.DEFAULT
				: isFocused
					? theme.colors.primary.DEFAULT
					: '#888',
		};

		const inputStyles: StyleProp<TextStyle> = [
			styles.inputBase,
			isFocused && styles.inputFocused,
			isError && styles.inputError,
			style,
		];

		useEffect(() => {
			Animated.timing(labelAnim, {
				toValue: shouldFloat ? 1 : 0,
				duration: 200,
				useNativeDriver: false,
			}).start();
		}, [shouldFloat]);

		return (
			<View style={styles.container}>
				{label && <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>}
				<TextInput
					{...props}
					ref={ref}
					style={inputStyles}
					placeholderTextColor='#888'
					placeholder={placeholder}
					onFocus={(e) => {
						setIsFocused(true);
						props.onFocus?.(e);
					}}
					onBlur={(e) => {
						setIsFocused(false);
						props.onBlur?.(e);
					}}
				/>
			</View>
		);
	},
);

Input.displayName = 'Input';
