import "dotenv/config"

module.exports = {
  name: "Todolist",
  version: "1.0.0",
  extra: {
    apiUrl: process.env.API_URL,
  },
}
