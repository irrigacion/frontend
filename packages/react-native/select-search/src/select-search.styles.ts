import { theme } from '@irrigacion/theme';
import { StyleSheet } from 'react-native';

const MIN_BORDER_WIDTH = 8;

export const styles = StyleSheet.create({
	option: {
		flex: 1,
		padding: theme.spacing[2],
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	error: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8d7da',
	},
	errorText: {
		color: theme.colors.danger.DEFAULT,
	},

	// Input
	input: {
		padding: theme.spacing[2],
		paddingBottom: theme.spacing[0],
		marginBottom: theme.spacing[2],
	},

	// Selected Option

	container: {
		position: 'relative',
		height: 40,
		width: '100%',
		marginTop: 5,
	},
	selectSearchBase: {
		height: '100%',
		borderWidth: 1,
		minWidth: 240,
		borderRadius: theme.radius.md,
		padding: theme.spacing[2],
		fontSize: theme.fontSize.base,
		borderColor: '#ccc',
		borderTopWidth: 0,
		color: theme.colors.text.base,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	topLeft: {
		position: 'absolute',
		top: -2,
		left: -1,
		width: MIN_BORDER_WIDTH,
		minWidth: MIN_BORDER_WIDTH,
		height: 15,
		borderWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderBottomWidth: 0,
		borderRightWidth: 0,
		borderColor: '#ccc',
		borderTopLeftRadius: theme.radius.md,
	},
	topRight: {
		position: 'absolute',
		top: -2,
		right: -1,
		width: 8,
		minWidth: MIN_BORDER_WIDTH,
		height: 15,
		borderWidth: 1,
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderColor: '#ccc',
		borderTopRightRadius: theme.radius.md,
	},
	selectedOption: {
		flex: 1,
	},
	icon: {
		width: 16,
	},
	label: {
		position: 'absolute',
		left: theme.spacing[1],
		paddingHorizontal: 4,
		fontSize: theme.fontSize.xs,
		zIndex: 4,
		color: '#888',
		marginTop: -12,
	},
	// Pagination
	pagination: { fontSize: theme.fontSize.xs },
	pageNavigation: { flexDirection: 'row', gap: theme.spacing[2] },
});
