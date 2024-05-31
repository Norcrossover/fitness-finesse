const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
