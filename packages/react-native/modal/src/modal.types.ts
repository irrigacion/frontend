import { ReactNode } from 'react';
import { PressableStateCallbackType } from 'react-native';

export type ModalSize = 'auto' | 'lg' | 'fullscreen';

export interface ModalConfig {
	onOpen?: () => void;
	onClose?: () => void;
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
}

export interface TriggerProps {
	children: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
}

export interface ContentProps {
	children: ReactNode;
	onMount?: () => void;
	onUnmount?: () => void;
}

export interface HeaderProps {
	children?: ReactNode;
}
