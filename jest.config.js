module.exports = {
	transform: {
		"^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
	},
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
