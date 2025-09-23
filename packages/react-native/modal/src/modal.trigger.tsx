import React from 'react';
import { Pressable } from 'react-native';
import { useModal } from './modal.context';
import { TriggerProps } from './modal.types';

export const Trigger = ({ children }: TriggerProps) => {
	const { setOpen } = useModal();
	return (
		<Pressable onPress={() => setOpen(true)}>
			{typeof children === 'function' ? children({ pressed: false }) : children}
		</Pressable>
	);
};
