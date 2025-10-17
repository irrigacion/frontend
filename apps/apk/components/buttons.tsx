import { Button } from '@irrigacion/button-apk';
import { Text, View } from 'react-native';

export const ViewButtons = () => {
	return (
		<View style={{ width: '100%' }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Botones</Text>
			<View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
				<Button variant='primary'>Primary</Button>
				<Button variant='secondary'>Secondary</Button>
				<Button variant='danger'>Danger</Button>
			</View>
		</View>
	);
};
