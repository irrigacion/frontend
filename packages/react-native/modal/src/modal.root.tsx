import React, { Children, isValidElement, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { Content } from './modal.content';
import { ModalContext } from './modal.context';
import { Trigger } from './modal.trigger';
import { RootModalProps } from './modal.types';

export const Root = ({
	children,
	open: controlledOpen,
	onOpenChange,
	...config
}: RootModalProps) => {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : uncontrolledOpen;

	const setOpen = (value: boolean) => {
		if (isControlled) {
			onOpenChange?.(value);
		} else {
			setUncontrolledOpen(value);
		}
	};

	const [hasOpened, setHasOpened] = useState(false);

	useEffect(() => {
		if (open && !hasOpened) {
			config.onOpen?.();
			setHasOpened(true);
		}
		//
		else if (!open && hasOpened) {
			Keyboard.dismiss();
			config.onClose?.();
			setHasOpened(false);
		}
	}, [open, hasOpened, config.onOpen, config.onClose]);

	let trigger: React.ReactElement | null = null;
	let content: React.ReactElement | null = null;

	Children.forEach(children, (child) => {
		if (isValidElement(child)) {
			if (child.type === Trigger) trigger = child;
			else if (child.type === Content) content = child;
		}
	});

	return (
		<ModalContext.Provider value={{ open, setOpen, config }}>
			{trigger}
			{content}
		</ModalContext.Provider>
	);
};
