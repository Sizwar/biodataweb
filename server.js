const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Biodata = require("./models/Biodata");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/biodata", { useNewUrlParser: true });

app.get("/api/biodata", async (req, res) => {
  const data = await Biodata.find();
  res.json(data);
});

app.post("/api/biodata", async (req, res) => {
  const newData = new Biodata(req.body);
  await newData.save();
  res.json({ message: "Biodata ditambahkan!" });
});

app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));