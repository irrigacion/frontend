import { Button } from '@irrigacion/button-apk';
import { Modal } from '@irrigacion/modal-apk';
import { theme } from '@irrigacion/theme';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { useSelectSearch } from './select-search.context';
import { styles } from './select-search.styles';

export const SelectSearchPagination = () => {
	const { page, setPage, paginationData, size } = useSelectSearch();

	if (!paginationData) return null;

	return (
		<Modal.Footer
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: theme.spacing[4],
				padding: 8,
			}}
		>
			<View style={{ flex: 1 }}>
				<Text style={styles.pagination}>
					Página {paginationData.page + 1} de{' '}
					{Math.max(Math.ceil(paginationData.total / paginationData.size), 1)}
				</Text>
				<Text style={styles.pagination}>Total de registros: {paginationData.total}</Text>
			</View>
			<View style={styles.pageNavigation}>
				<Button size='sm' disabled={page === 0} onPress={() => setPage(page - 1)}>
					<Text style={{ color: 'white' }}>
						<ChevronLeft color='white' />
					</Text>
				</Button>
				<Button
					size='sm'
					disabled={(page + 1) * size >= paginationData.total}
					onPress={() => setPage(page + 1)}
				>
					<ChevronRight color='white' />
				</Button>
			</View>
		</Modal.Footer>
	);
};

SelectSearchPagination.displayName = Modal.Footer.displayName;
