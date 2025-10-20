import { Switch } from '@irrigacion/switch-apk';
import { useState } from 'react';
import { Text, View } from 'react-native';

export const ViewSwitch = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<View style={{ width: '100%' }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Componente Switch</Text>

			<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<Switch label='No controlado (default: true)' defaultValue={true} />

				<Switch
					label={`Controlado (estado: ${isActive ? 'ON' : 'OFF'})`}
					value={isActive}
					onValueChange={setIsActive}
				/>

				<Switch label='Tamaño pequeño (sm)' size='sm' />

				<Switch label='Deshabilitado OFF' disabled />
				<Switch label='Deshabilitado ON' defaultValue={true} disabled />
			</View>
		</View>
	);
};
