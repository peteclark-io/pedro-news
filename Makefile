default: prod

dev:
	webpack --watch --progress --colors &

serve:
	cd dist && ruby -run -ehttpd . -p9000

prod:
	webpack -p --config webpack.config.prod.js --progress --colors

publish:
	cd dist && surge
