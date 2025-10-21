import { Button } from '@irrigacion/button-apk';
import { ProgressBar } from '@irrigacion/progress-bar-apk';
import { theme } from '@irrigacion/theme';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export const ViewProgressBar = () => {
	const [progress, setProgress] = useState(20);

	useEffect(() => {
		if (progress < 100) {
			const timer = setTimeout(() => setProgress(progress + 20), 2000);
			return () => clearTimeout(timer);
		}
	}, [progress]);

	return (
		<View style={{ width: '90%', gap: 16, alignItems: 'center' }}>
			<Text style={{ fontWeight: 'bold' }}>Componente Progress Bar</Text>

			<View style={{ width: '100%', gap: 20 }}>
				<ProgressBar value={progress} size='sm' />
				<ProgressBar value={progress} size='md' color={theme.colors.success.DEFAULT} />
				<ProgressBar
					value={progress}
					size='lg'
					color={theme.colors.danger.DEFAULT}
					showLabel
				/>
				<ProgressBar
					value={progress}
					size='xl'
					color={theme.colors.purple[600]}
					label='Label como string'
				/>
				<ProgressBar
					value={progress}
					size='2xl'
					color={theme.colors.warning.DEFAULT}
					label={(value) => {
						return (
							<View
								style={{
									paddingHorizontal: 8,
									paddingVertical: 2,
									borderRadius: 999,
									backgroundColor: theme.colors.primary[700],
								}}
							>
								<Text
									style={{
										color: 'white',
										fontWeight: 'bold',
									}}
								>{`${value}%`}</Text>
							</View>
						);
					}}
				/>
			</View>

			<Button onPress={() => setProgress(0)} variant='secondary' size='sm'>
				Resetear Progreso
			</Button>
		</View>
	);
};
