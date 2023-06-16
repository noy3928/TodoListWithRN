// jest.config.js
module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "expo-constants": "<rootDir>/__mocks__/expo-constants.js",
  },
}
