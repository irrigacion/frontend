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
		borderBottomWidth: 1,
		borderColor: '#ddd',
		padding: theme.spacing[3],
	},
	headerContent: {
		flex: 1,
	},
	closeButtonContainer: {
		paddingLeft: theme.spacing[2],
	},
	closeButton: {
		color: 'black',
		padding: theme.spacing[3],
		borderRadius: theme.radius.sm,
		minWidth: 25,
		minHeight: 25,
	},
	body: {
		padding: theme.spacing.sm,
	},
	footer: {
		padding: theme.spacing[3],
	},
});
