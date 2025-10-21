import { StyleSheet } from 'react-native';
import { theme } from '@irrigacion/theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		padding: theme.spacing[3],
		borderRadius: theme.radius.md,
		borderWidth: 1,
		gap: theme.spacing[3],
	},
	contentContainer: {
		flex: 1,
		gap: theme.spacing[1],
	},
	title: {
		fontWeight: theme.fontWeight.bold as 'normal',
		fontSize: theme.fontSize.base,
	},
	message: {
		fontSize: theme.fontSize.sm,
	},

	// --- VARIANTES ---
	infoContainer: {
		backgroundColor: theme.colors.blue[50],
		borderColor: theme.colors.blue[200],
	},
	infoText: {
		color: theme.colors.blue[800],
	},
	successContainer: {
		backgroundColor: theme.colors.green[50],
		borderColor: theme.colors.green[200],
	},
	successText: {
		color: theme.colors.green[800],
	},
	warningContainer: {
		backgroundColor: theme.colors.yellow[50],
		borderColor: theme.colors.yellow[300],
	},
	warningText: {
		color: theme.colors.yellow[800],
	},
	dangerContainer: {
		backgroundColor: theme.colors.red[50],
		borderColor: theme.colors.red[200],
	},
	dangerText: {
		color: theme.colors.red[800],
	},
});
