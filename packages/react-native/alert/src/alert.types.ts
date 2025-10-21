import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends ViewProps {
	/**
	 * El tipo de alerta, que define el color y el ícono por defecto.
	 * @default 'info'
	 */
	variant?: AlertVariant;
	/** Título opcional de la alerta. */
	title?: string;
	/** El contenido principal de la alerta. */
	children: ReactNode;
	/**
	 * Permite pasar un ícono personalizado o deshabilitarlo pasándole `false`.
	 * Si no se define, se usará un ícono por defecto según la variante.
	 */
	icon?: ReactNode | false;
}
