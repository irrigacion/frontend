import { Modal } from '@irrigacion/modal-apk';
import { Text, View } from 'react-native';

export const ViewModal = () => {
	return (
		<Modal
			size='fullscreen'
			title='Título del Modal'
			showCloseButton
			onOpen={() => console.log('Modal abierto')}
			onClose={() => console.log('Modal cerrado')}
		>
			<Modal.Trigger>
				<View style={{ padding: 10, backgroundColor: 'lightblue', borderRadius: 8 }}>
					<Text>Abrir modal</Text>
				</View>
			</Modal.Trigger>

			<Modal.Content>
				<Text>Contenido del modal</Text>
				<Text>Contenido del modal</Text>
				<Text>Contenido del modal</Text>
				<Text>Contenido del modal</Text>
				<Text>Contenido del modal</Text>
				<Text>Contenido del modal</Text>
			</Modal.Content>
		</Modal>
	);
};
