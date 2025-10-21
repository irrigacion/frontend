import type { JSX } from 'react';
import type { ViewProps } from 'react-native';

export interface ProgressBarProps extends ViewProps {
	/**
	 * El valor actual del progreso, de 0 a 100.
	 */
	value: number;
	/**
	 * El tamaño (altura) de la barra de progreso.
	 * @default 'md'
	 */
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	/**
	 * El color de la barra de progreso.
	 * @default theme.colors.primary.DEFAULT
	 */
	color?: string;
	/**
	 * Si es `true`, muestra el porcentaje de progreso como texto sobre la barra.
	 * La propiedad se ignora si se especifica un label personalizado
	 * @default false
	 */
	showLabel?: boolean;
	/**
	 * Una función para renderizar un componente personalizado como label.
	 * Recibe el valor actual del progreso como argumento.
	 */
	label?: string | ((value: number) => string | JSX.Element);
	/**
	 * La duración de la animación en milisegundos.
	 * @default 300
	 */
	animationDuration?: number;
}
