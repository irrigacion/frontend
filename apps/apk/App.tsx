import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ViewAlert } from './components/alert';
import { ViewButtons } from './components/buttons';
import { ViewCard } from './components/card';
import { ViewCheckbox } from './components/checkbox';
import { ViewDivider } from './components/divider';
import { ViewInput } from './components/input';
import { ViewModal } from './components/modal';
import { ViewProgressBar } from './components/progress-bar';
import { ViewSelectSearch } from './components/select-search';
import { ViewSpinner } from './components/spinner';
import { ViewSwitch } from './components/switch';

export default function App() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
				<ViewButtons />
				<ViewInput />
				<ViewCard />
				<ViewModal />
				<ViewSelectSearch />
				<ViewCheckbox />
				<ViewSwitch />
				<ViewSpinner />
				<ViewAlert />
				<ViewProgressBar />
				<ViewDivider />
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
		flexGrow: 1,
		gap: 24,
		padding: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
