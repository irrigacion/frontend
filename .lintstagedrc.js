const fs = require('fs');
const path = require('path');

function buildLintStagedConfig() {
	const config = {
		'**/*.{js,jsx,ts,tsx}': (filenames) => `prettier --write ${filenames.join(' ')}`,
	};

	const packageParents = ['docs', 'packages'];

	packageParents.forEach((parent) => {
		const parentDir = path.resolve(__dirname, parent);
		if (!fs.existsSync(parentDir)) return;

		fs.readdirSync(parentDir, { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.forEach((entry) => {
				const projectPath = path.join(parent, entry.name);
				const eslintConfigPath = path.resolve(__dirname, projectPath, 'eslint.config.js');

				if (fs.existsSync(eslintConfigPath)) {
					const normalizedPath = projectPath.replace(/\\/g, '/');
					console.log(`[lint-staged] Found ESLint config in: ${normalizedPath}`);

					const pattern = `${normalizedPath}/**/*.{js,jsx,ts,tsx}`;

					config[pattern] = (filenames) => {
						const relativeFilenames = filenames
							.map((f) => path.relative(__dirname, f))
							.join(' ');
						return `eslint --fix --cache --config "${eslintConfigPath}" ${relativeFilenames}`;
					};
				}
			});
	});

	const rootEslintConfig = path.resolve(__dirname, 'eslint.config.js');
	if (fs.existsSync(rootEslintConfig)) {
		console.log('[lint-staged] Found ESLint config in root');
		config['./*.{js,jsx,ts,tsx}'] = (filenames) =>
			`eslint --fix --cache ${filenames.join(' ')}`;
	}

	return config;
}

module.exports = buildLintStagedConfig();
