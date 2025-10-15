import { ModalSize } from '@irrigacion/modal-apk';
import { GetOptionsProps, PaginationData, Response } from '@irrigacion/types';
import React from 'react';

/**
 * Define el tipo de dato para el valor del contexto `SelectSearchContext`.
 * @template T El tipo de dato para las opciones.
 */
export interface SelectSearchContextValue<T> {
	/** La opción actualmente seleccionada. Puede ser `null` si no hay selección. */
	selectedOption: T | null;
	/** Función para establecer la opción seleccionada. */
	setSelectedOption: (option: T | null) => void;
	/** Array de las opciones cargadas actualmente. */
	options: T[];
	/** Booleano que indica si se están cargando nuevas opciones. */
	isLoading: boolean;
	/** (Opcional) Mensaje de error si la carga de opciones falla. */
	error?: string;
	/** Datos de paginación de la respuesta de la API. Puede ser `null`. */
	paginationData: PaginationData | null;
	/** El número de la página actual que se está mostrando. */
	page: number;
	/** El número de elementos por página. */
	size: number;
	/** Función para establecer el número de la página a solicitar. */
	setPage: (page: number) => void;
	/** El valor actual del input de búsqueda. */
	queryInput: string;
	/** Función para establecer el valor del input de búsqueda. */
	setQueryInput: (query: string) => void;
	/** Función manejadora que se ejecuta al seleccionar una opción. */
	handleSelectOption: (option: T) => void;
	/** Función que obtiene el nombre a mostrar para una opción. */
	getName: (option: T) => string;
	/** La propiedad del objeto `T` que se usa como `key`. */
	keyProp: keyof T;
	/** Texto a mostrar cuando no hay ninguna opción seleccionada. */
	notSelectedText: string;
	/** Texto a mostrar cuando la búsqueda no devuelve resultados. */
	noResultsText: string;
	/** Texto a mostrar mientras se están cargando las opciones. */
	loadingText: string;
	/** Texto a mostrar si ocurre un error al obtener las opciones. */
	errorMessage: string;
}

/**
 * Define la estructura de las props para el componente `SelectSearch`.
 * @template T El tipo de dato para las opciones.
 */
export interface SelectSearchProps<T> {
	/** (Opcional) El valor seleccionado actual. Si se proporciona, el componente opera en modo controlado. */
	value?: T | null;
	/** (Opcional) Callback que se ejecuta cuando el valor seleccionado cambia. Requerido para el modo controlado. */
	onChange?: (value: T | null) => void;
	/** (Opcional) El valor inicial para el modo no controlado. */
	defaultValue?: T | null;
	/** Función asíncrona que obtiene las opciones. Recibe `GetOptionsProps` y devuelve una `Promise` con una `Response<T>`. */
	getOptions: (props: GetOptionsProps) => Promise<Response<T>>;
	/** Función que recibe una opción de tipo `T` y devuelve el `string` a mostrar. */
	getName: (option: T) => string;
	/** Propiedad del objeto `T` que se usará como `key` única para cada opción. */
	keyProp: keyof T;
	/** (Opcional) Función para renderizar una opción personalizada. Recibe la opción y un booleano `isSelected`. */
	renderOption?: (option: T, isSelected: boolean) => React.ReactNode;
	/** (Opcional) Si es `true`, el modal se cierra al seleccionar una opción. Default: `true`. */
	closeModalOnSelect?: boolean;
	/** (Opcional) El tamaño del modal. Puede ser 'auto', 'lg' o 'fullscreen'. Default: 'lg'. */
	size?: ModalSize;
	/** (Opcional) Configuración de la paginación. */
	pagination?: {
		/** Número de registros por página. Default: 10. */
		size: number;
	};
	/** (Opcional) El texto a mostrar en el `label` del campo. */
	label?: string;
	/** (Opcional) Si es `true`, el campo de búsqueda se enfoca automáticamente al abrir. Default: `true`. */
	autofocus?: boolean;
	/** (Opcional) Callback que se ejecuta cuando el selector se abre. */
	onOpen?: () => void;
	/** (Opcional) Callback que se ejecuta cuando el selector se cierra. */
	onClose?: () => void;
	// Texts
	/** (Opcional) Texto a mostrar cuando no hay valor seleccionado ni búsqueda. Default: 'Buscar...'. */
	placeholder?: string;
	/** (Opcional) Texto a mostrar cuando no hay ninguna opción seleccionada. Default: 'Sin seleccionar'. */
	notSelectedText?: string;
	/** (Opcional) Texto a mostrar cuando la búsqueda no devuelve resultados. Default: 'No se encontraron resultados.'. */
	noResultsText?: string;
	/** (Opcional) Texto a mostrar si ocurre un error al obtener las opciones. Default: 'Ocurrió un error al obtener los datos.'. */
	errorMessage?: string;
	/** (Opcional) Texto a mostrar mientras se están cargando las opciones. Default: 'Buscando...'. */
	loadingText?: string;
	/** (Opcional) Tiempo en milisegundos para el debounce en la búsqueda. Default: 200. */
	debounceTime?: number;
}
