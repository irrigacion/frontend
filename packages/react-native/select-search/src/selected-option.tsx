import { ChevronDown } from 'lucide-react-native';
import { useState } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import { styles } from './select-search.styles';

export interface SelectSearchOptionProps<T> {
	selectedOption: T | null;
	getName: (option: T) => string;
	label?: string;
	notSelectedText: string;
	style?: StyleProp<TextStyle>;
	onPress?: () => void;
}

const MIN_BORDER_WIDTH = 8;

export const SelectedOption = <T,>({
	label,
	style,
	onPress,
	selectedOption: option,
	getName,
	notSelectedText,
}: SelectSearchOptionProps<T>) => {
	const [labelWidth, setLabelWidth] = useState<number>(0);
	const [containerWidth, setContainerWidth] = useState<number>(0);

	const leftBorderWidth = MIN_BORDER_WIDTH;

	let topRightWidth = MIN_BORDER_WIDTH;
	if (!label) topRightWidth = containerWidth - leftBorderWidth;
	else topRightWidth = Math.floor(Math.max(containerWidth - (labelWidth + leftBorderWidth), 0));

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<View
				style={styles.container}
				onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
			>
				{label && (
					<Text
						style={[styles.label, { maxWidth: containerWidth - MIN_BORDER_WIDTH * 2 }]}
						onLayout={(e) => setLabelWidth(e.nativeEvent.layout.width)}
						numberOfLines={1}
						ellipsizeMode='tail'
					>
						{label}
					</Text>
				)}
				<View style={[styles.selectSearchBase, style]}>
					<View style={styles.topLeft} />
					<View style={[styles.topRight, { width: topRightWidth }]} />
					<Text style={styles.selectedOption} numberOfLines={1} ellipsizeMode='tail'>
						{option ? getName(option) : notSelectedText}
					</Text>
					<Text style={styles.icon}>
						<ChevronDown />
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

SelectedOption.displayName = 'SelectedOption';
