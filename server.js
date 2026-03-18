require("dotenv").config({ path: __dirname + "/.env" });
console.log("ENV:", process.env.DB_PASSWORD);
const app = require("./src/app");

require("./src/config/db");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});