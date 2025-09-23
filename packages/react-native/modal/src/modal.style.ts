import { StyleSheet } from 'react-native';
import { theme } from '@irrigacion/theme';

export const styles = StyleSheet.create({
	backdrop: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentWrapper: {
		backgroundColor: '#fff',
		overflow: 'hidden',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing.sm,
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
	},
	closeButton: {
		fontSize: 20,
		padding: theme.spacing.xs,
	},
	body: {
		padding: theme.spacing.sm,
	},
});
