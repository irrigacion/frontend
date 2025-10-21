import { theme } from '@irrigacion/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	track: {
		width: '100%',
		backgroundColor: theme.colors.gray[200],
		borderRadius: theme.radius.full,
		overflow: 'hidden',
	},
	indicator: {
		height: '100%',
		borderRadius: theme.radius.full,
	},
	labelContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		color: theme.colors.text.accent,
		fontWeight: theme.fontWeight.semibold as 'semibold',
		fontSize: theme.fontSize.xs,
	},
	// --- SIZES ---
	sm: { height: 6 },
	md: { height: 14 },
	lg: { height: 18 },
	xl: { height: 24 },
	'2xl': { height: 32 },
});
