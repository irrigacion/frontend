import { theme } from '@irrigacion/theme';
import { Check } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './checkbox.style';
import type { CheckboxProps } from './checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	defaultChecked = false,
	onValueChange,
	label,
	disabled,
	size = 'md',
	style,
	...props
}) => {
	const [internalChecked, setInternalChecked] = useState(defaultChecked);
	const isControlled = checked !== undefined;
	const isChecked = isControlled ? checked : internalChecked;

	const handlePress = () => {
		if (disabled) return;

		const newCheckedState = !isChecked;
		if (!isControlled) {
			setInternalChecked(newCheckedState);
		}
		onValueChange?.(newCheckedState);
	};

	const iconSize = size === 'sm' ? 12 : 16;

	return (
		<TouchableOpacity
			style={[styles.container, disabled && styles.checkboxDisabled, style]}
			onPress={handlePress}
			activeOpacity={0.8}
			disabled={disabled}
			{...props}
		>
			<View
				style={[
					styles.checkboxBase,
					size === 'sm' ? styles.sizeSmBox : styles.sizeMdBox,
					isChecked && styles.checkboxChecked,
				]}
			>
				{isChecked && <Check color={theme.colors.text.accent} size={iconSize} />}
			</View>
			{label && (
				<Text
					style={[styles.label, size === 'sm' ? styles.sizeSmLabel : styles.sizeMdLabel]}
				>
					{label}
				</Text>
			)}
		</TouchableOpacity>
	);
};
