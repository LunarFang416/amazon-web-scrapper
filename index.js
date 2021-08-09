const express = require("express");
const request = require("request-promise");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello brother</h1>");
});
app.use("/api", router);

app.listen(PORT, console.log(`Server is Listening on port ${PORT}`));
