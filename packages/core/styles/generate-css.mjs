import { theme } from '@irrigacion/theme';
import fs from 'fs';

const TOKEN_UNITS = {
	radius: 'px',
	spacing: 'px',
	fontSize: 'px',
};

const toKebabCase = (str) => str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);

let cssString = ':root {\n';

for (const category in theme) {
	const tokenGroup = theme[category];

	cssString += `	/* --- ${category.toUpperCase()} --- */\n`;

	for (const tokenName in tokenGroup) {
		const value = tokenGroup[tokenName];
		const unit = TOKEN_UNITS[category] || '';

		const cssVarName = `--${toKebabCase(category)}-${toKebabCase(tokenName)}`;

		cssString += `	${cssVarName}: ${value}${unit};\n`;
	}

	cssString += '\n';
}

cssString += '}';

fs.writeFileSync('./src/index.css', cssString);
