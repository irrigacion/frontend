import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { ViewButtons } from './components/buttons';
import { ViewCheckbox } from './components/checkbox';
import { ViewInput } from './components/input';
import { ViewModal } from './components/modal';
import { ViewSelectSearch } from './components/select-search';
import { ViewSwitch } from './components/switch';
import { ViewSpinner } from './components/spinner';

export default function App() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
				<ViewButtons />
				<ViewInput />
				<ViewModal />
				<ViewSelectSearch />
				<ViewCheckbox />
				<ViewSwitch />
				<ViewSpinner />
				<StatusBar style='auto' />
			</ScrollView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: '#fff',
	},
	contentContainer: {
		// Estos estilos se aplican al contenido que se va a scrollear
		flexGrow: 1, // Permite que el contenido crezca para llenar la pantalla
		gap: 24, // Un poco más de espacio entre componentes
		padding: 36,
		alignItems: 'center', // Centra los componentes horizontalmente
		justifyContent: 'center', // Centra el bloque de componentes verticalmente
	},
});
