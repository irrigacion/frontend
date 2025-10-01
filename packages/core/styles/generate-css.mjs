import { theme } from '@irrigacion/theme';
import fs from 'fs';
import { TOKEN_UNITS } from './token-units.mjs';

const toKebabCase = (str) =>
	str
		.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
		.replace(/\./g, '-')
		.toLowerCase();

let cssString = ':root {\n';

const processTokenGroup = (category, tokenGroup, prefix = '') => {
	for (const tokenName in tokenGroup) {
		const value = tokenGroup[tokenName];
		const unit = TOKEN_UNITS[category] || '';

		let normalizedName;
		if (tokenName === 'DEFAULT') normalizedName = prefix;
		else {
			normalizedName = prefix
				? `${prefix}-${toKebabCase(tokenName)}`
				: toKebabCase(tokenName);
		}

		if (typeof value === 'object') processTokenGroup(category, value, normalizedName);
		else {
			const cssVarName = normalizedName
				? `--${toKebabCase(category)}-${normalizedName}`
				: `--${toKebabCase(category)}`;

			const finalValue = typeof value === 'number' ? `${value}${unit}` : value;

			cssString += `  ${cssVarName}: ${finalValue};\n`;
		}
	}
};

for (const category in theme) {
	cssString += `  /* --- ${category.toUpperCase()} --- */\n`;
	processTokenGroup(category, theme[category]);
	cssString += '\n';
}

cssString += '}';

fs.writeFileSync('./src/index.css', cssString);

console.log('✅ CSS generado correctamente en ./src/index.css');
