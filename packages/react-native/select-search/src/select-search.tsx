import { useDebounce } from '@irrigacion/hooks';
import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { SelectSearchContext } from './select-search.context';
import { SelectSearchInput } from './select-search-input';
import { SelectSearchList } from './select-search-list';
import { SelectSearchPagination } from './select-search-pagination';
import type { SelectSearchContextValue, SelectSearchProps } from './select-search.types';
import { SelectedOption } from './selected-option';
import { PaginationData } from '@irrigacion/types';
import { Modal } from '@irrigacion/modal-apk';

export const SelectSearch = <T,>({
	label,
	keyProp,
	getOptions,
	getName,
	renderOption,
	pagination,
	size: modalSize = 'lg',
	autofocus = true,
	closeModalOnSelect = true,
	onOpen,
	onClose,
	placeholder = 'Buscar...',
	notSelectedText = 'Sin seleccionar',
	noResultsText = 'No se encontraron resultados.',
	errorMessage = 'Ocurrió un error al obtener los datos.',
	loadingText = 'Buscando...',
	debounceTime = 200,
}: SelectSearchProps<T>) => {
	const [selectedOption, setSelectedOption] = useState<T | null>(null);
	const [options, setOptions] = useState<T[]>([]);
	const [paginationData, setPaginationData] = useState<PaginationData | null>(null);
	const [queryInput, setQueryInput] = useState('');
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(0);
	const [size] = useState(pagination?.size ?? 10);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const inputRef = useRef<TextInput>(null);
	useDebounce({ value: queryInput, delay: debounceTime, callback: setQuery });

	const handleSelectOption = (option: T) => {
		if (selectedOption && selectedOption[keyProp] === option[keyProp]) {
			setSelectedOption(null);
		} else {
			setSelectedOption(option);
		}
		if (closeModalOnSelect) setIsModalOpen(false);
	};

	const handleClose = () => {
		setError(undefined);
		setIsLoading(false);
		setPage(0);
		onClose?.();
	};

	useEffect(() => {
		if (!isModalOpen) return;

		const fetchOptions = async () => {
			try {
				setError(undefined);
				setIsLoading(true);
				const response = await getOptions({ query, page, size });
				setOptions(response.data ?? []);
				if (pagination) setPaginationData(response.pagination ?? null);
			} catch (err) {
				setError(err instanceof Error ? err.message : errorMessage);
			} finally {
				setIsLoading(false);
			}
		};
		fetchOptions();
	}, [isModalOpen, query, page, size]);

	const contextValue: SelectSearchContextValue<T> = {
		selectedOption,
		setSelectedOption,
		options,
		isLoading,
		error,
		paginationData,
		page,
		size,
		setPage,
		queryInput,
		setQueryInput,
		handleSelectOption,
		getName,
		keyProp,
		notSelectedText,
		noResultsText,
		loadingText,
		errorMessage,
	};

	return (
		<SelectSearchContext.Provider value={contextValue}>
			<Modal
				size={modalSize}
				showCloseButton
				onOpen={onOpen}
				onClose={handleClose}
				open={isModalOpen}
				onOpenChange={setIsModalOpen}
			>
				<Modal.Trigger>
					<SelectedOption
						label={label}
						selectedOption={selectedOption}
						getName={getName}
						notSelectedText={notSelectedText}
					/>
				</Modal.Trigger>

				<Modal.Content
					onMount={() => autofocus && inputRef.current?.focus()}
					style={{ padding: 0 }}
				>
					<SelectSearchInput ref={inputRef} label={label} placeholder={placeholder} />
					<SelectSearchList renderOption={renderOption} />
					{pagination && paginationData && <SelectSearchPagination />}
				</Modal.Content>
			</Modal>
		</SelectSearchContext.Provider>
	);
};
