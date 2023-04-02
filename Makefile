install:
	npm ci

publish:
	npm publish --dry-run

makelint:
	npx eslint
