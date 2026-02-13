import { Children, cloneElement, isValidElement, useCallback } from 'react';
import { GestureResponderEvent, Keyboard } from 'react-native';
import { useModal } from './modal.context';
import { TriggerProps } from './modal.types';

interface TriggerChildProps {
	onPress?: (event: GestureResponderEvent) => Promise<void> | void;
}

export const Trigger = ({ children }: TriggerProps) => {
	const { setOpen } = useModal();

	const child = Children.only(children);

	if (!isValidElement<TriggerChildProps>(child)) return null;

	const handlePress = useCallback(
		async (event: GestureResponderEvent) => {
			Keyboard.dismiss();
			await child.props.onPress?.(event);
			setOpen(true);
		},
		[child.props.onPress, setOpen],
	);

	return cloneElement(child, {
		...child.props,
		onPress: handlePress,
	});
};

Trigger.displayName = 'ModalTrigger';
