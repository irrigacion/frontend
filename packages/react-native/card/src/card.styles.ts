import { StyleSheet } from 'react-native';
import { theme } from '@irrigacion/theme';

export const styles = StyleSheet.create({
	root: {
		width: '100%',
		backgroundColor: 'white',
		borderRadius: theme.radius.lg,
		overflow: 'hidden',
	},
	bordered: {
		borderWidth: 1,
		borderColor: theme.colors.gray[200],
	},
	header: {
		paddingHorizontal: theme.spacing[4],
		paddingTop: theme.spacing[4],
		paddingBottom: theme.spacing[2],
	},
	headerBorder: {
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.gray[200],
	},
	body: {
		paddingHorizontal: theme.spacing[4],
		paddingVertical: theme.spacing[2],
	},
	footer: {
		paddingHorizontal: theme.spacing[4],
		paddingBottom: theme.spacing[4],
		paddingTop: theme.spacing[2],
	},
	footerBorder: {
		borderTopWidth: 1,
		borderTopColor: theme.colors.gray[200],
	},
});
