import { theme } from '@irrigacion/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.spacing[2],
	},
	checkboxBase: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: theme.radius.sm,
		borderColor: theme.colors.gray[400],
		backgroundColor: 'transparent',
	},
	checkboxChecked: {
		backgroundColor: theme.colors.primary.DEFAULT,
		borderColor: theme.colors.primary.DEFAULT,
	},
	checkboxDisabled: {
		opacity: 0.6,
	},
	label: {
		color: theme.colors.text.base,
	},
	// --- SIZES ---
	sizeSmBox: {
		width: 16,
		height: 16,
	},
	sizeMdBox: {
		width: 20,
		height: 20,
	},
	sizeSmLabel: {
		fontSize: theme.fontSize.sm,
	},
	sizeMdLabel: {
		fontSize: theme.fontSize.base,
	},
});
