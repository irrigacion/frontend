import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import React from 'react';
import styles from './button.module.css';

const buttonVariants = cva(styles.base, {
	variants: {
		variant: {
			primary: styles['primary'],
			secondary: styles['secondary'],
			danger: styles['danger'],
		},
		size: {
			sm: styles['size-sm'],
			md: styles['size-md'],
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({ className, variant, size, children, ...props }) => {
	const classes = clsx(buttonVariants({ variant, size }), className);

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};
