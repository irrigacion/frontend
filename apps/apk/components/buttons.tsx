import { Button } from '@irrigacion/button-apk';
import { View } from 'react-native';

export const ViewButtons = () => {
	return (
		<View>
			<Button variant='primary'>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='danger'>Danger</Button>
		</View>
	);
};
