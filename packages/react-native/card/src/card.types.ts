import type { ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
	/**
	 * El nivel de sombra que se aplicará a la tarjeta.
	 * @default 'sm'
	 */
	shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export interface CardHeaderProps extends ViewProps {
	withBorder?: boolean;
}
export interface CardBodyProps extends ViewProps {}
export interface CardFooterProps extends ViewProps {
	withBorder?: boolean;
}
