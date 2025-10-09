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
		backgroundColor: theme.colors.primary.DEFAULT,
		borderColor: theme.colors.primary.DEFAULT,
	},
	secondaryContainer: {
		backgroundColor: theme.colors.secondary.DEFAULT,
		borderColor: theme.colors.primary.DEFAULT,
	},
	dangerContainer: {
		backgroundColor: theme.colors.danger.DEFAULT,
		borderColor: theme.colors.danger.DEFAULT,
	},

	primaryText: {
		color: theme.colors.text.accent,
	},
	secondaryText: {
		color: theme.colors.text.base,
	},
	dangerText: {
		color: theme.colors.text.accent,
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
