import { StyleSheet } from 'react-native';
import { theme } from '@irrigacion/theme';

export const styles = StyleSheet.create({
	baseContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: theme.radius.md,
		borderWidth: 1,
	},
	baseText: {
		fontWeight: '600',
		textAlign: 'center',
	},

	primaryContainer: {
		backgroundColor: theme.color.primary,
		borderColor: theme.color.primary,
	},
	secondaryContainer: {
		backgroundColor: theme.color.secondary,
		borderColor: theme.color.primary,
	},
	dangerContainer: {
		backgroundColor: theme.color.danger,
		borderColor: theme.color.danger,
	},

	primaryText: {
		color: theme.color.textOnPrimary,
	},
	secondaryText: {
		color: theme.color.textDefault,
	},
	dangerText: {
		color: theme.color.textOnPrimary,
	},

	smContainer: {
		height: 32,
		paddingHorizontal: 12,
	},
	mdContainer: {
		height: 40,
		paddingHorizontal: 16,
	},

	smText: {
		fontSize: 14,
	},
	mdText: {
		fontSize: 16,
	},

	disabledContainer: {
		opacity: 0.6,
	},
});
