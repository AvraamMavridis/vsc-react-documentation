module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  testMatch: [ '**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)' ],
  modulePaths: [ '<rootDir>/src', '<rootDir>/test' ],
  modulePathIgnorePatterns: [ '<rootDir>/node_modules' ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src',
    '<rootDir>/test'
  ]
};
