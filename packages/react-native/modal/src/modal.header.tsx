import { X } from 'lucide-react-native';
import { Pressable, View } from 'react-native';
import { useModal } from './modal.context';
import { styles } from './modal.style';
import { HeaderProps } from './modal.types';

export const Header = ({ children, style }: HeaderProps) => {
	const { setOpen, config } = useModal();

	return (
		<View style={[styles.header, style]}>
			<View style={styles.headerContent}>{children}</View>

			{config.showCloseButton && (
				<Pressable style={styles.closeButtonContainer} onPress={() => setOpen(false)}>
					<X style={styles.closeButton} />
				</Pressable>
			)}
		</View>
	);
};

Header.displayName = 'ModalHeader';
