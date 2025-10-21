import { theme } from '@irrigacion/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing[2],
	},
	label: {
		fontSize: theme.fontSize.sm,
		color: theme.colors.gray[600],
	},
});
