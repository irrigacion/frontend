import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
	isError?: boolean;
	label?: string;
	withAnimation?: boolean;
}
