import { Pressable, Text, View } from 'react-native';
import { useModal } from './modal.context';
import { styles } from './modal.style';
import { HeaderProps } from './modal.types';

export const Header = ({ children }: HeaderProps) => {
	const { setOpen, config } = useModal();

	return (
		<View style={styles.header}>
			<View style={styles.headerContent}>{children}</View>

			{config.showCloseButton && (
				<Pressable onPress={() => setOpen(false)}>
					<Text style={styles.closeButton}>✕</Text>
				</Pressable>
			)}
		</View>
	);
};

Header.displayName = 'ModalHeader';
