import React, { Children, isValidElement, useEffect, useState } from 'react';
import { Content } from './modal.content';
import { ModalContext } from './modal.context';
import { Trigger } from './modal.trigger';
import { RootModalProps } from './modal.types';

export const Root = ({ children, ...config }: RootModalProps) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open && config.onOpen) config.onOpen();
		if (!open && config.onClose) config.onClose();
	}, [open, config.onOpen, config.onClose]);

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
