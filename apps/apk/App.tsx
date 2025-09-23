import { Button } from '@irrigacion/button-apk';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ViewButtons } from './components/buttons';
import { ViewModal } from './components/modal';

export default function App() {
	return (
		<View style={styles.container}>
			<ViewButtons />
			<ViewModal />
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
