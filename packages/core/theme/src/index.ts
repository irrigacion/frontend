import { colors } from './colors.js';

export const theme = {
	/**
	 * Paleta de colores del sistema de diseño.
	 * Incluye colores primarios, secundarios, de estado (success, danger) y una gama extendida de grises y otros colores.
	 */
	colors: colors,

	/**
	 * Define los valores para el radio de los bordes.
	 */
	radius: {
		/** `0rem` / `0px` */
		none: 0,
		/** `0.25rem` / `4px` */
		sm: 4,
		/** `0.375rem` / `6px` */
		md: 6,
		/** `0.5rem` / `8px` */
		lg: 8,
		/** `0.75rem` / `12px` */
		xl: 12,
		/** `1rem` / `16px` */
		'2xl': 16,
		/** `1.5rem` / `24px` */
		'3xl': 24,
		/** `9999px` (para formas circulares) */
		full: 9999,
	},

	/**
	 * Escala de espaciado para márgenes, paddings y gaps.
	 */
	spacing: {
		/** `0.0625rem` / `1px` */
		px: 1,
		/** `0rem` / `0px` */
		0: 0,
		/** `0.125rem` / `2px` */
		0.5: 2,
		/** `0.25rem` / `4px` */
		1: 4,
		/** `0.375rem` / `6px` */
		1.5: 6,
		/** `0.5rem` / `8px` */
		2: 8,
		/** `0.625rem` / `10px` */
		2.5: 10,
		/** `0.75rem` / `12px` */
		3: 12,
		/** `0.875rem` / `14px` */
		3.5: 14,
		/** `1rem` / `16px` */
		4: 16,
		/** `1.25rem` / `20px` */
		5: 20,
		/** `1.5rem` / `24px` */
		6: 24,
		/** `1.75rem` / `28px` */
		7: 28,
		/** `2rem` / `32px` */
		8: 32,
		/** `2.25rem` / `36px` */
		9: 36,
		/** `2.5rem` / `40px` */
		10: 40,
		/** `2.75rem` / `44px` */
		11: 44,
		/** `3rem` / `48px` */
		12: 48,
		/** `3.5rem` / `56px` */
		14: 56,
		/** `4rem` / `64px` */
		16: 64,
		/** `5rem` / `80px` */
		20: 80,
		/** `6rem` / `96px` */
		24: 96,
		/** `7rem` / `112px` */
		28: 112,
		/** `8rem` / `128px` */
		32: 128,
		/** `9rem` / `144px` */
		36: 144,
		/** `10rem` / `160px` */
		40: 160,
		/** `11rem` / `176px` */
		44: 176,
		/** `12rem` / `192px` */
		48: 192,
		/** `13rem` / `208px` */
		52: 208,
		/** `14rem` / `224px` */
		56: 224,
		/** `15rem` / `240px` */
		60: 240,
		/** `16rem` / `256px` */
		64: 256,
		/** `18rem` / `288px` */
		72: 288,
		/** `20rem` / `320px` */
		80: 320,
		/** `24rem` / `384px` */
		96: 384,
	},

	/**
	 * Tamaños de fuente.
	 */
	fontSize: {
		/** `0.75rem` / `12px` */
		xs: 12,
		/** `0.875rem` / `14px` */
		sm: 14,
		/** `1rem` / `16px` */
		base: 16,
		/** `1.125rem` / `18px` */
		lg: 18,
		/** `1.25rem` / `20px` */
		xl: 20,
		/** `1.5rem` / `24px` */
		'2xl': 24,
		/** `1.875rem` / `30px` */
		'3xl': 30,
		/** `2.25rem` / `36px` */
		'4xl': 36,
		/** `3rem` / `48px` */
		'5xl': 48,
		/** `3.75rem` / `60px` */
		'6xl': 60,
		/** `4.5rem` / `72px` */
		'7xl': 72,
		/** `6rem` / `96px` */
		'8xl': 96,
		/** `8rem` / `128px` */
		'9xl': 128,
	},

	/**
	 * Pesos de fuente (font weight).
	 */
	fontWeight: {
		/** `100` */
		thin: '100',
		/** `200` */
		extralight: '200',
		/** `300` */
		light: '300',
		/** `400` */
		normal: '400',
		/** `500` */
		medium: '500',
		/** `600` */
		semibold: '600',
		/** `700` */
		bold: '700',
		/** `800` */
		extrabold: '800',
		/** `900` */
		black: '900',
	},

	/**
	 * Alturas de línea.
	 */
	lineHeight: {
		/** `0.75rem` / `12px` */
		none: 12,
		/** `1rem` / `16px` */
		tight: 16,
		/** `1.25rem` / `20px` */
		snug: 20,
		/** `1.5rem` / `24px` */
		normal: 24,
		/** `1.75rem` / `28px` */
		relaxed: 28,
		/** `2rem` / `32px` */
		loose: 32,
		/** `0.75rem` / `12px` */
		3: 12,
		/** `1rem` / `16px` */
		4: 16,
		/** `1.25rem` / `20px` */
		5: 20,
		/** `1.5rem` / `24px` */
		6: 24,
		/** `1.75rem` / `28px` */
		7: 28,
		/** `2rem` / `32px` */
		8: 32,
		/** `2.25rem` / `36px` */
		9: 36,
		/** `2.5rem` / `40px` */
		10: 40,
	},

	/**
	 * Espaciado entre letras.
	 */
	letterSpacing: {
		/** `-0.0625rem` / `-1px` */
		tighter: -1,
		/** `-0.03125rem` / `-0.5px` */
		tight: -0.5,
		/** `0rem` / `0px` */
		normal: 0,
		/** `0.03125rem` / `0.5px` */
		wide: 0.5,
		/** `0.0625rem` / `1px` */
		wider: 1,
		/** `0.125rem` / `2px` */
		widest: 2,
	},

	/**
	 * Niveles de opacidad.
	 */
	opacity: {
		/** `0%` */
		0: 0,
		/** `5%` */
		5: 0.05,
		/** `10%` */
		10: 0.1,
		/** `20%` */
		20: 0.2,
		/** `25%` */
		25: 0.25,
		/** `30%` */
		30: 0.3,
		/** `40%` */
		40: 0.4,
		/** `50%` */
		50: 0.5,
		/** `60%` */
		60: 0.6,
		/** `70%` */
		70: 0.7,
		/** `75%` */
		75: 0.75,
		/** `80%` */
		80: 0.8,
		/** `90%` */
		90: 0.9,
		/** `95%` */
		95: 0.95,
		/** `100%` */
		100: 1,
	},

	/**
	 * Valores de `z-index` para la gestión de capas.
	 */
	zIndex: {
		/** `z-index: 0` */
		0: 0,
		/** `z-index: 10` */
		10: 10,
		/** `z-index: 20` */
		20: 20,
		/** `z-index: 30` */
		30: 30,
		/** `z-index: 40` */
		40: 40,
		/** `z-index: 50` */
		50: 50,
		/** `z-index: auto` */
		auto: 'auto',
	},

	/**
	 * Estilos de sombra para React Native.
	 * `shadow*` es para iOS y `elevation` para Android.
	 */
	shadows: {
		sm: {
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 1 },
			shadowOpacity: 0.05,
			shadowRadius: 2,
			elevation: 1,
		},
		md: {
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 4 },
			shadowOpacity: 0.1,
			shadowRadius: 6,
			elevation: 4,
		},
		lg: {
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 10 },
			shadowOpacity: 0.15,
			shadowRadius: 20,
			elevation: 8,
		},
	},

	/**
	 * Puntos de interrupción (breakpoints) para diseño responsivo.
	 */
	breakpoints: {
		/** `640px` */
		sm: 640,
		/** `768px` */
		md: 768,
		/** `1024px` */
		lg: 1024,
		/** `1280px` */
		xl: 1280,
		/** `1536px` */
		'2xl': 1536,
	},

	/**
	 * Relaciones de aspecto comunes.
	 */
	aspectRatio: {
		/** `1 / 1` */
		square: 1,
		/** `16 / 9` */
		video: 16 / 9,
		/** `1.618 / 1` (Golden Ratio) */
		golden: 1.618,
	},

	/**
	 * Anchos de borde.
	 */
	borderWidth: {
		/** 1px */
		DEFAULT: 1,
		/** 0*/
		0: 0,
		/** `2px */
		2: 2,
		/** 4px*/
		4: 4,
		/** 8px */
		8: 8,
	},

	/**
	 * Duraciones de transición en milisegundos.
	 */
	transitionDuration: {
		/** `75ms` */
		75: 75,
		/** `100ms` */
		100: 100,
		/** `150ms` */
		150: 150,
		/** `200ms` */
		200: 200,
		/** `300ms` */
		300: 300,
		/** `500ms` */
		500: 500,
		/** `700ms` */
		700: 700,
		/** `1000ms` */
		1000: 1000,
	},
};
