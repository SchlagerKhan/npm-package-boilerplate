module.exports = {
	presets: ['@babel/preset-env'],
	env: {
		development: {},
		production: {
			ignore: ['**/*.test.js'],
		},
	},
};
