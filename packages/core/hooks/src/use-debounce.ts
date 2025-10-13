import { useEffect, useRef } from 'react';

/**
 * Opciones para el hook useDebounce.
 * @template T - El tipo del valor a "debouncar".
 */
type UseDebounceOptions<T> = {
	/** El valor que dispara el efecto. */
	value: T;
	/** El tiempo de espera en milisegundos. */
	delay?: number;
	/** La función que se ejecuta después del delay. */
	callback: (v: T) => void;
};

/**
 * Ejecuta una función con un delay (debounce) después de que el valor cambia.
 * Se usa para evitar llamadas innecesarias mientras el usuario escribe, por ejemplo.
 *
 * @param {UseDebounceOptions<T>} options - Opciones para el debounce.
 * @param {T} options.value - valor que dispara el efecto
 * @param {number} [options.delay=200] - tiempo en ms - Default: 200
 * @param {(v: T) => void} options.callback - función que se ejecuta después del delay
 *
 * @example useDebounce({ value: queryInput, delay: debounceTime, callback: setQuery })
 * // Cada vez que cambia queryInput, esperamos debounceTime y actualizamos query
 */
export function useDebounce<T>({ value, delay = 200, callback }: UseDebounceOptions<T>) {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => callback(value), delay);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [value, delay, callback]);
}
