const mongoose = require("mongoose");

const BiodataSchema = new mongoose.Schema({
  nama: String,
  tanggal_lahir: Date,
  alamat: String,
  foto: String,
  deskripsi: String
});

module.exports = mongoose.model("Biodata", BiodataSchema);