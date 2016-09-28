default: prod

dev:
	webpack --watch --progress --colors

prod:
	webpack -p --config webpack.config.prod.js --progress --colors
