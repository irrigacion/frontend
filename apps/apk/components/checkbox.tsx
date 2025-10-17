import { Checkbox } from '@irrigacion/checkbox-apk';
import { useState } from 'react';
import { Text, View } from 'react-native';

export const ViewCheckbox = () => {
	const [isChecked, setIsChecked] = useState(true);

	return (
		<View style={{ width: '100%' }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Componente Checkbox</Text>

			<View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<Checkbox label='No controlado' />

				<Checkbox
					label={`Controlado (estado: ${isChecked})`}
					checked={isChecked}
					onValueChange={setIsChecked}
				/>

				<Checkbox label='Deshabilitado' disabled />
				<Checkbox label='Deshabilitado y marcado' defaultChecked disabled />
			</View>
		</View>
	);
};
