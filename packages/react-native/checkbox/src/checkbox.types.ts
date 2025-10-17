import type { TouchableOpacityProps } from 'react-native';

export interface CheckboxProps extends Omit<TouchableOpacityProps, 'onPress'> {
	/** Si true, el checkbox estará marcado. Usar para componente controlado. */
	checked?: boolean;
	/** El estado inicial del checkbox cuando no está controlado. */
	defaultChecked?: boolean;
	/** Callback que se ejecuta cuando el estado del checkbox cambia. */
	onValueChange?: (isChecked: boolean) => void;
	/** El texto que se mostrará junto al checkbox. */
	label?: string;
	/** Si true, el usuario no podrá interactuar con el checkbox. */
	disabled?: boolean;
	/*
	 * El tamaño del checkbox y su label.
	 * @default 'md'
	 */
	size?: 'sm' | 'md';
}
