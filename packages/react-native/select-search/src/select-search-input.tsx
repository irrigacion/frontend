import { Input, InputProps } from '@irrigacion/input-apk';
import { forwardRef } from 'react';
import { View } from 'react-native';
import { useSelectSearch } from './select-search.context';
import { styles } from './select-search.styles';

export const SelectSearchInput = forwardRef<any, InputProps>(({ label, placeholder }, ref) => {
	const { queryInput, setQueryInput, setPage } = useSelectSearch();

	const handleSearch = (text: string) => {
		setQueryInput(text);
		setPage(0);
	};

	return (
		<View style={styles.input}>
			<Input
				ref={ref}
				label={label}
				placeholder={placeholder}
				value={queryInput}
				onChangeText={handleSearch}
			/>
		</View>
	);
});
