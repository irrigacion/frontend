import { Button } from '@irrigacion/button-apk';
import { Card } from '@irrigacion/card-apk';
import { Text, View } from 'react-native';

export const ViewCard = () => {
	return (
		<View style={{ width: '90%', gap: 16, alignItems: 'center' }}>
			<Text style={{ fontWeight: 'bold' }}>Componente Card</Text>

			<Card shadow='md'>
				<Card.Header>
					<Text style={{ fontWeight: '600', fontSize: 18 }}>Título de la Tarjeta</Text>
				</Card.Header>
				<Card.Body>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam
						earum laboriosam!
					</Text>
				</Card.Body>
				<Card.Footer style={{ alignItems: 'flex-end' }}>
					<Button size='sm'>Ver Más</Button>
				</Card.Footer>
			</Card>

			<Card shadow='md'>
				<Card.Header withBorder>
					<Text style={{ fontWeight: '600', fontSize: 18 }}>Tarjeta con Bordes</Text>
				</Card.Header>
				<Card.Body>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam
						earum laboriosam!
					</Text>
				</Card.Body>
				<Card.Footer withBorder>
					<Text>Footer tarjeta</Text>
				</Card.Footer>
			</Card>

			<Card shadow='none'>
				<Card.Body>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam
						earum laboriosam!
					</Text>
				</Card.Body>
			</Card>
		</View>
	);
};
