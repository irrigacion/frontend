import { Button } from '@irrigacion/button-apk';
import { View } from 'react-native';

export const ViewButtons = () => {
	return (
		<View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
			<Button variant='primary'>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='danger'>Danger</Button>
		</View>
	);
};
