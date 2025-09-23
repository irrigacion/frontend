import { createContext, useContext } from 'react';
import { ModalContextValue } from './modal.types';

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('Modal compound components must be used inside <Modal>');
	}
	return context;
};
