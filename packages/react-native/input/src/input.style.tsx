import { theme } from '@irrigacion/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: 40,
		width: '100%',
		marginTop: 5,
	},
	inputBase: {
		height: '100%',
		borderWidth: 1,
		minWidth: 240,
		borderRadius: theme.radius.md,
		padding: theme.spacing.sm,
		fontSize: theme.fontSize.body,
		borderColor: '#ccc',
		color: theme.color.textDefault,
	},
	inputFocused: {
		borderColor: theme.color.primary,
		shadowColor: theme.color.primary,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		borderWidth: 2,
	},
	inputError: {
		borderColor: theme.color.danger,
	},
	label: {
		position: 'absolute',
		left: theme.spacing.sm,
		backgroundColor: '#fff',
		paddingHorizontal: 4,
		zIndex: 4,
		color: '#888',
	},
});
