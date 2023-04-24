module.exports = {
	extends: [
		'react-app',
		'react-app/jest',
		'airbnb',
		'airbnb/hooks',
		'prettier',
	],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/react-in-jsx-scope': 'off',
	},
};
