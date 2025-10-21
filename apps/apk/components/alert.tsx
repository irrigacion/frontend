import { Alert } from '@irrigacion/alert-apk';
import { Text, View } from 'react-native';

export const ViewAlert = () => {
	return (
		<View style={{ width: '90%', gap: 16, alignItems: 'center' }}>
			<Text style={{ fontWeight: 'bold' }}>Componente Alert</Text>

			<Alert variant='info' title='Información'>
				Descripción de la alerta
			</Alert>

			<Alert variant='success' title='Éxito'>
				Descripción de la alerta
			</Alert>

			<Alert variant='warning' title='Advertencia'>
				Descripción de la alerta
			</Alert>

			<Alert variant='danger' title='Error'>
				Descripción de la alerta
			</Alert>

			<Alert variant='success' icon={false}>
				Descripción de la alerta sin ícono
			</Alert>
		</View>
	);
};
