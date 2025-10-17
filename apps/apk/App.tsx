import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { ViewButtons } from './components/buttons';
import { ViewCheckbox } from './components/checkbox';
import { ViewInput } from './components/input';
import { ViewModal } from './components/modal';
import { ViewSelectSearch } from './components/select-search';

export default function App() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<ViewButtons />
				<ViewInput />
				<ViewModal />
				<ViewSelectSearch />
				<ViewCheckbox />
				<StatusBar style='auto' />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'column',
		gap: 16,
		width: '100%',
		padding: 36,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
});
