/**
 * Define la estructura para una respuesta de API paginada.
 * @template T El tipo de datos para los elementos en el array `data`.
 */
export interface Response<T> {
	/** Un array de elementos del tipo genérico T. */
	data: T[];
	/** Contiene los datos de la paginación. */
	pagination: PaginationData;
}

/**
 * Define la estructura de los datos de paginación.
 */
export interface PaginationData {
	/** El número de la página actual. */
	page: number;
	/** El número de elementos por página. */
	size: number;
	/** El número total de elementos disponibles. */
	total: number;
}

/**
 * Define la estructura para las opciones de obtención de datos.
 */
export interface GetOptionsProps {
	/** El número de la página a obtener. */
	page: number;
	/** El número de elementos a obtener por página. */
	size: number;
	/** Una cadena de texto para filtrar los resultados. */
	query: string;
}
