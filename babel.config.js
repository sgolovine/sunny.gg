module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
      },
    ],
  ],
}
