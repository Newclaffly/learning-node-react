const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection suceesfuly");
});

const excercisesRouter = require("./routes/excercises");
const userRouter = require("./routes/users");

app.use("/execerises", excercisesRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is up and running on port : ${port}`);
});
