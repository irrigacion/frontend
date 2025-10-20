import type { TouchableOpacityProps } from 'react-native';

export interface SwitchProps extends Omit<TouchableOpacityProps, 'onPress'> {
	/** Si `true`, el switch estará activado. Usar para componente controlado. */
	value?: boolean;
	/**
	 * El estado inicial del switch cuando no está controlado.
	 * @default false
	 */
	defaultValue?: boolean;
	/** Callback que se ejecuta cuando el estado del switch cambia. */
	onValueChange?: (isOn: boolean) => void;
	/**
	 * El texto que se mostrará junto al switch.
	 */
	label?: string;
	/** Si `true`, el usuario no podrá interactuar con el switch. */
	disabled?: boolean;
	/**
	 * El tamaño del switch y su label.
	 * @default 'md'
	 */
	size?: 'sm' | 'md';
}
