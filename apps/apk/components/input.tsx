import { Input } from '@irrigacion/input-apk';
import { View } from 'react-native';

export const ViewInput = () => {
	return (
		<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<Input label='Correo Electrónico.' />
			<Input editable={false} label='Correo Electrónico' />
		</View>
	);
};
