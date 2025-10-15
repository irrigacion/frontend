import { ReactNode } from 'react';
import { PressableStateCallbackType, ScrollView, StyleProp, ViewStyle } from 'react-native';

export type ModalSize = 'auto' | 'lg' | 'fullscreen';

export interface ModalConfig {
	onOpen?: () => void;
	onClose?: () => void;
	title?: string;
	showCloseButton?: boolean;
	size?: ModalSize;
}

export interface ModalContextValue {
	open: boolean;
	setOpen: (value: boolean) => void;
	config: ModalConfig;
}

export interface RootModalProps extends ModalConfig {
	children: ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export interface TriggerProps {
	children: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
}

export interface HeaderProps {
	children?: ReactNode;
	style?: StyleProp<ViewStyle>;
}

export interface ContentProps {
	children: ReactNode;
	onMount?: () => void;
	onUnmount?: () => void;
	style?: StyleProp<ViewStyle>;
	ref?: React.RefObject<ScrollView>;
}

export interface FooterProps {
	children?: ReactNode;
	style?: StyleProp<ViewStyle>;
}
