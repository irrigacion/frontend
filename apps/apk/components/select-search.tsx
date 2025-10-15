import { SelectSearch } from '@irrigacion/select-search-apk';
import { View } from 'react-native';

const FAKE_OPTIONS = Array.from({ length: 100 }, (_, i) => {
	return {
		id: i,
		name: `Organismo ${i}`,
	};
});

const defaultValue = FAKE_OPTIONS[42];

export const ViewSelectSearch = () => {
	return (
		<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<SelectSearch
				defaultValue={defaultValue}
				label='Buscar Organismos'
				getOptions={async ({ page, size, query }) => {
					await new Promise((resolve) => setTimeout(resolve, 10));
					const options = FAKE_OPTIONS.filter((option) => option.name.includes(query));
					const paginated = options.slice(page * size, (page + 1) * size);
					if (query.length > 4) throw 'a';
					return {
						data: paginated,
						pagination: {
							page,
							size,
							total: options.length,
						},
					};
				}}
				// renderOption={(option) => <Text>{option.name}!</Text>}
				keyProp={'id'}
				getName={(option) => `${option.id} - ${option.name}`}
				pagination={{ size: 20 }}
			/>
		</View>
	);
};
