module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using babel-jest
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@babel).+\\.js$', // Transform ES modules in node_modules except those in @babel
  ],
  moduleNameMapper: {
    '\\.(css|scss|svg)$': '<rootDir>/src/__mocks__/fileMock.js', // Mock CSS and SVG files
  },
};
