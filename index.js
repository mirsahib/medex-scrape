const express = require("express");

//server configuration
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  try {
    return res.json({ msg: "home" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.use("/medlist", require("./routes/med-list.route"));

app.listen(port, () => console.log(`Listening on port ${port}`));
