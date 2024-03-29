const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/keys");

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected."))
  .catch(err => console.log(err));

mongoose.set("debug", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.Promise = Promise;

module.exports.User = require("./user");
