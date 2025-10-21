import { Spinner } from '@irrigacion/spinner-apk';
import { theme } from '@irrigacion/theme';
import { Text, View } from 'react-native';

export const ViewSpinner = () => {
	return (
		<View style={{ width: '100%' }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Componente Spinner</Text>
			<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<View
					style={{ display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'center' }}
				>
					{/* Tamaños */}
					<Spinner size='sm' />
					<Spinner size='md' />
					<Spinner size='lg' />
				</View>

				<View
					style={{ display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'center' }}
				>
					<Spinner label='Buscando...' color={theme.colors.purple[600]} />
					<Spinner label='Cargando...' />
					<Spinner label='Eliminando...' color={theme.colors.danger.DEFAULT} />
				</View>
			</View>
		</View>
	);
};
