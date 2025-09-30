import { View } from 'react-native';
import { styles } from './modal.style';
import { FooterProps } from './modal.types';

export const Footer = ({ children, style }: FooterProps) => {
	return <View style={[styles.footer, style]}>{children}</View>;
};

Footer.displayName = 'ModalFooter';
