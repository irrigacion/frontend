import type { ViewProps } from 'react-native';

export interface SpinnerProps extends ViewProps {
	/**
	 * El tamaño del spinner.
	 * 'sm' se mapea a 'small' del ActivityIndicator.
	 * 'md' se mapea a 'large' del ActivityIndicator.
	 * 'lg' es un tamaño numérico personalizado (48).
	 * @default 'md'
	 */
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
	/**
	 * Un texto opcional que se muestra debajo del spinner.
	 */
	label?: string;
	/**
	 * El color del spinner.
	 * @default theme.colors.primary.DEFAULT
	 */
	color?: string;
}
