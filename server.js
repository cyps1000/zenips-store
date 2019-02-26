require("dotenv").config();
const { PORT, NODE_ENV } = require("./config/keys");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");

const auth = require("./routes/auth");
const time = 60 * 1000 * 60 * 24 * 30; // 30 days
const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(require("prerender-node"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./middleware/passport")(passport);

app.use("/api/auth", auth);

// Serve static assets if in production
if (NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build", { maxAge: time }));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen to Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
