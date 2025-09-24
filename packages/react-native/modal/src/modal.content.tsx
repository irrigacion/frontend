import React, { Children, isValidElement, useEffect, useRef, useState } from 'react';
import {
	Animated,
	Modal as BaseModal,
	Dimensions,
	StyleProp,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from 'react-native';
import { useModal } from './modal.context';
import { Header } from './modal.header';
import { styles } from './modal.style';
import { ContentProps, ModalSize } from './modal.types';

export const Content = ({ children }: ContentProps) => {
	const { open, setOpen, config } = useModal();
	const window = Dimensions.get('window');

	const [isVisible, setIsVisible] = useState(open);

	const opacity = useRef(new Animated.Value(0)).current;
	const scale = useRef(new Animated.Value(0.8)).current;

	useEffect(() => {
		if (open) {
			setIsVisible(true);
			Animated.parallel([
				Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
				Animated.spring(scale, {
					toValue: 1,
					bounciness: 5,
					speed: 12,
					useNativeDriver: true,
				}),
			]).start();
		} else {
			Animated.parallel([
				Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }),
				Animated.timing(scale, { toValue: 0.8, duration: 150, useNativeDriver: true }),
			]).start(() => setIsVisible(false));
		}
	}, [open]);

	let header: React.ReactElement | null = null;
	const bodyContent: React.ReactNode[] = [];

	Children.forEach(children, (child) => {
		if (isValidElement<ContentProps>(child) && child.type === Header) header = child;
		else bodyContent.push(child);
	});

	if (!isVisible) return null;

	const dimensions: Record<ModalSize, StyleProp<ViewStyle>> = {
		auto: { width: '90%', maxHeight: '90%' },
		lg: { height: window.height * 0.8, width: '90%' },
		fullscreen: { height: '100%', width: '100%' },
	};

	const sizeStyle = dimensions[config.size || 'auto'];

	return (
		<BaseModal
			visible={isVisible}
			transparent
			animationType='none'
			onRequestClose={() => setOpen(false)}
		>
			{/* Backdrop */}
			<TouchableWithoutFeedback onPress={() => setOpen(false)}>
				<Animated.View style={[styles.backdrop, { opacity }]} />
			</TouchableWithoutFeedback>

			{/* Contenedor centrado */}
			<View
				style={[
					styles.centeredContainer,
					{ padding: config.size === 'fullscreen' ? 0 : 16 },
				]}
			>
				<Animated.View
					style={[
						styles.contentWrapper,
						sizeStyle,
						{
							borderRadius: config.size === 'fullscreen' ? 0 : 12,
							maxHeight: config.size === 'fullscreen' ? '100%' : '90%',
							transform: [{ scale }],
						},
					]}
				>
					{/* Header */}
					{header}

					{/* Body */}
					<View style={[styles.body, config.size === 'auto' ? {} : { flex: 1 }]}>
						{bodyContent}
					</View>
				</Animated.View>
			</View>
		</BaseModal>
	);
};
