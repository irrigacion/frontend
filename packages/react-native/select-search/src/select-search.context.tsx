import { createContext, useContext } from 'react';
import type { SelectSearchContextValue } from './select-search.types';

export const SelectSearchContext = createContext<SelectSearchContextValue<any> | null>(null);

export function useSelectSearch<T>() {
	const context = useContext(SelectSearchContext);
	if (!context) {
		throw new Error('SelectSearch compound components must be used within <SelectSearch>');
	}
	return context as SelectSearchContextValue<T>;
}
