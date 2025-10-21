import type { ViewProps } from 'react-native';

export interface DividerProps extends ViewProps {
	/**
	 * La orientación de la línea divisoria.
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * El grosor de la línea en píxeles.
	 * @default 1
	 */
	thickness?: number;
	/**
	 * El color de la línea.
	 * @default theme.colors.gray[200]
	 */
	color?: string;
}
