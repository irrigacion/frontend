import { Divider } from '@irrigacion/divider-apk';
import { theme } from '@irrigacion/theme';
import { Text, View } from 'react-native';

export const ViewDivider = () => {
	return (
		<View style={{ width: '90%', gap: 16, alignItems: 'center' }}>
			<Text style={{ fontWeight: 'bold' }}>Componente Divider</Text>

			<View style={{ width: '100%', gap: 10, alignItems: 'center' }}>
				<Text>Texto arriba</Text>
				<Divider />
				<Text>Texto en medio</Text>
				<Divider color={theme.colors.danger.DEFAULT} thickness={2} />
				<Text>Texto abajo</Text>
			</View>

			<View
				style={{
					width: '100%',
					height: 50,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 10,
				}}
			>
				<Text>Izquierda</Text>
				<Divider orientation='vertical' />
				<Text>Centro</Text>
				<Divider
					orientation='vertical'
					color={theme.colors.primary.DEFAULT}
					thickness={3}
				/>
				<Text>Derecha</Text>
			</View>
		</View>
	);
};
