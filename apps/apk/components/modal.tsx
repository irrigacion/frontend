import { Button } from '@irrigacion/button-apk';
import { Modal } from '@irrigacion/modal-apk';
import { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';

export const ViewModal = () => {
	const inputRef = useRef<TextInput>(null);

	return (
		<View style={{ width: '100%' }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Modal</Text>
			<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<Modal size='auto' showCloseButton>
					<Modal.Trigger>
						<Button>Modal</Button>
					</Modal.Trigger>

					<Modal.Content onMount={() => inputRef.current?.focus()}>
						<Modal.Header>
							<Text>Título del Modal</Text>
						</Modal.Header>
						<View>
							<Text>Contenido del modal 1</Text>
							<Text>Contenido del modal 2</Text>
							<Text>Contenido del modal 3</Text>
							<Text>Contenido del modal 4</Text>
							<Text>Contenido del modal 5</Text>
							<Text>Contenido del modal 6</Text>
						</View>
					</Modal.Content>
				</Modal>
			</View>
		</View>
	);
};
