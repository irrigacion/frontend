import { theme } from '@irrigacion/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.spacing[2],
	},
	track: {
		justifyContent: 'center',
		borderRadius: theme.radius.full,
		backgroundColor: theme.colors.gray[300],
	},
	trackOn: {
		backgroundColor: theme.colors.primary.DEFAULT,
	},
	thumb: {
		backgroundColor: 'white',
		borderRadius: theme.radius.full,
		...theme.shadows.sm,
	},
	disabled: {
		opacity: theme.opacity[60],
	},
	label: {
		color: theme.colors.text.base,
	},

	sizeMdTrack: {
		height: 28,
		width: 50,
		paddingHorizontal: 3,
	},
	sizeMdThumb: {
		height: 22,
		width: 22,
	},
	sizeSmTrack: {
		height: 20,
		width: 36,
		paddingHorizontal: 3,
	},
	sizeSmThumb: {
		height: 14,
		width: 14,
	},
	sizeMdLabel: {
		fontSize: theme.fontSize.base,
	},
	sizeSmLabel: {
		fontSize: theme.fontSize.sm,
	},
});
