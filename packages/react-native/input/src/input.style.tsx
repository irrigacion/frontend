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
		padding: theme.spacing['1'],
		fontSize: theme.fontSize.base,
		borderColor: '#ccc',
		color: theme.colors.text.base,
	},
	inputFocused: {
		borderColor: theme.colors.primary.DEFAULT,
		shadowColor: theme.colors.primary.DEFAULT,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		borderWidth: 2,
	},
	inputError: {
		borderColor: theme.colors.danger.DEFAULT,
	},
	label: {
		position: 'absolute',
		left: theme.spacing['1'],
		backgroundColor: '#fff',
		paddingHorizontal: 4,
		zIndex: 4,
		color: '#888',
	},
});
