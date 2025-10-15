import { Children, forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
import {
	Animated,
	Modal as BaseModal,
	Dimensions,
	Keyboard,
	ScrollView,
	StyleProp,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from 'react-native';
import { useModal } from './modal.context';
import { Footer } from './modal.footer';
import { Header } from './modal.header';
import { styles } from './modal.style';
import { ContentProps, ModalSize } from './modal.types';

export const Content = forwardRef<ScrollView, ContentProps>(
	({ children, onMount, onUnmount, style }, ref) => {
		const { open, setOpen, config } = useModal();
		const window = Dimensions.get('window');

		const [isVisible, setIsVisible] = useState(open);

		const opacity = useRef(new Animated.Value(0)).current;
		const scale = useRef(new Animated.Value(0.8)).current;

		useEffect(() => {
			if (!isVisible) return;

			return () => {
				onUnmount?.();
			};
		}, [isVisible, onUnmount]);

		useEffect(() => {
			if (open) {
				setIsVisible(true);
				Animated.parallel([
					Animated.timing(opacity, { toValue: 1, duration: 0, useNativeDriver: true }),
					Animated.spring(scale, {
						toValue: 1,
						bounciness: 5,
						speed: 50,
						useNativeDriver: true,
					}),
				]).start(() => {
					onMount?.();
				});
			} else {
				Animated.parallel([
					Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }),
					Animated.timing(scale, { toValue: 0.8, duration: 150, useNativeDriver: true }),
				]).start(() => setIsVisible(false));
			}
		}, [open]);

		let header: React.ReactElement | null = null;
		let footer: React.ReactElement | null = null;
		const bodyContent: React.ReactNode[] = [];

		Children.forEach(children, (child) => {
			if (isValidElement<ContentProps>(child)) {
				const childType = child.type as React.ComponentType<any> & { displayName: string };
				if (childType.displayName === Header.displayName) header = child;
				else if (childType.displayName === Footer.displayName) footer = child;
				else bodyContent.push(child);
			}
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
				<View style={{ flex: 1 }} pointerEvents='box-none'>
					{/* Backdrop */}
					<TouchableWithoutFeedback onPress={() => setOpen(false)}>
						<Animated.View
							style={[styles.backdrop, { opacity }]}
							pointerEvents='box-only'
						/>
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
									borderRadius: config.size === 'fullscreen' ? 0 : 8,
									maxHeight: config.size === 'fullscreen' ? '100%' : '90%',
									transform: [{ scale }],
								},
							]}
						>
							{/* Header */}
							{header}

							{/* Body */}
							<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
								<ScrollView
									ref={ref}
									style={config.size === 'auto' ? {} : { flex: 1 }}
									contentContainerStyle={[styles.body, style]}
									keyboardShouldPersistTaps='handled'
									keyboardDismissMode='on-drag'
								>
									{bodyContent}
								</ScrollView>
							</TouchableWithoutFeedback>

							{/* Footer */}
							{footer}
						</Animated.View>
					</View>
				</View>
			</BaseModal>
		);
	},
);

Content.displayName = 'ModalContent';
