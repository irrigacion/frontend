import { theme } from '@irrigacion/theme';
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './alert.style';
import type { AlertProps, AlertVariant } from './alert.types';

const VARIANT_MAP: Record<
	AlertVariant,
	{
		containerStyle: object;
		textStyle: object;
		IconComponent: React.ElementType;
		iconColor: string;
	}
> = {
	info: {
		containerStyle: styles.infoContainer,
		textStyle: styles.infoText,
		IconComponent: Info,
		iconColor: theme.colors.blue[700],
	},
	success: {
		containerStyle: styles.successContainer,
		textStyle: styles.successText,
		IconComponent: CheckCircle2,
		iconColor: theme.colors.green[700],
	},
	warning: {
		containerStyle: styles.warningContainer,
		textStyle: styles.warningText,
		IconComponent: AlertTriangle,
		iconColor: theme.colors.yellow[700],
	},
	danger: {
		containerStyle: styles.dangerContainer,
		textStyle: styles.dangerText,
		IconComponent: XCircle,
		iconColor: theme.colors.red[700],
	},
};

export const Alert: React.FC<AlertProps> = ({
	variant = 'info',
	title,
	children,
	icon,
	style,
	...props
}) => {
	const { containerStyle, textStyle, IconComponent, iconColor } = VARIANT_MAP[variant];

	const renderIcon = () => {
		if (icon === false) {
			return null;
		}
		if (icon) {
			return icon;
		}
		return <IconComponent color={iconColor} size={24} />;
	};

	return (
		<View style={[styles.container, containerStyle, style]} {...props}>
			{renderIcon()}
			<View style={styles.contentContainer}>
				{title && <Text style={[styles.title, textStyle]}>{title}</Text>}
				<Text style={[styles.message, textStyle]}>{children}</Text>
			</View>
		</View>
	);
};
