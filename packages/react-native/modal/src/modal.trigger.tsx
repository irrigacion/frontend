import { Children, cloneElement, isValidElement } from 'react';
import { GestureResponderEvent } from 'react-native';
import { useModal } from './modal.context';
import { TriggerProps } from './modal.types';

interface TriggerChildProps {
	onPress?: (event: GestureResponderEvent) => Promise<void> | void;
}

export const Trigger = ({ children }: TriggerProps) => {
	const { setOpen } = useModal();

	const child = Children.only(children);

	if (!isValidElement<TriggerChildProps>(child)) return null;

	return cloneElement(child, {
		...child.props,
		onPress: async (event: GestureResponderEvent) => {
			await child.props.onPress?.(event);
			setOpen(true);
		},
	});
};
