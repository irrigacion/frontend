import { Pressable, Text, View } from 'react-native';
import { useSelectSearch } from './select-search.context';
import { styles } from './select-search.styles';

interface Props<T> {
	renderOption?: (opt: T, isSelected: boolean) => React.ReactNode;
}

export const SelectSearchList = <T,>({ renderOption }: Props<T>) => {
	const {
		options,
		isLoading,
		error,
		handleSelectOption,
		getName,
		selectedOption,
		keyProp,
		noResultsText,
		errorMessage,
		loadingText,
	} = useSelectSearch<T>();

	if (isLoading) {
		return (
			<View style={[styles.option, styles.loading]}>
				<Text>{loadingText}</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View style={[styles.option, styles.error]}>
				<Text style={styles.errorText}>{errorMessage}</Text>
			</View>
		);
	}

	if (!options.length) {
		return (
			<View style={[styles.option, styles.loading]}>
				<Text>{noResultsText}</Text>
			</View>
		);
	}

	return (
		<>
			{options.map((option) => {
				const selected = selectedOption?.[keyProp] === option[keyProp];
				return (
					<Pressable
						key={String(option[keyProp])}
						onPress={() => handleSelectOption(option)}
					>
						<>
							{renderOption?.(option, selected) ?? (
								<View
									style={[
										styles.option,
										selected ? { backgroundColor: '#007eff22' } : {},
									]}
								>
									<Text>{getName(option)}</Text>
								</View>
							)}
						</>
					</Pressable>
				);
			})}
		</>
	);
};
