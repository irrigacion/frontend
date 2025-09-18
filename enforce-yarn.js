if (process.env.npm_execpath && !process.env.npm_execpath.includes('yarn')) {
	console.error(`
  🚫 Este proyecto usa Yarn. No uses 'npm install'.
  ✅ Ejecutá en su lugar: yarn install

  ⚠️  Si es la primera vez, asegurate de tener corepack habilitado con:
                            corepack enable
`);
	process.exit(1);
}
