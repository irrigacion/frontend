import { Button } from '@irrigacion/button-apk';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Button variant='primary'>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='danger'>Danger</Button>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		gap: 8,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
