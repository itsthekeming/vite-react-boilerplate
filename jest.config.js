module.exports = {
  moduleDirectories: ["node_modules", "src"],
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"]
};
