import { Input } from '@irrigacion/input-apk';
import { Text, View } from 'react-native';

export const ViewInput = () => {
	return (
		<View style={{ width: '100%' }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Inputs</Text>
			<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<Input label='Label animada.' withAnimation />
				<Input label='Input estática.' />
				<Input editable={false} label='Deshabilitado' />
			</View>
		</View>
	);
};
