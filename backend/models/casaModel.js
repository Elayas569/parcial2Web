const mongoose = require("mongoose");

const casaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: [true, "Necesita un nombre"],
      trim: true,
    },
    precio: {
      type: Number,
      require: [true, "Necesita un precio"],
      min: [0, "Tiene que ser un valor positivo"],
    },
    ubicacion: {
      type: String,
      require: [true, "Necesita una ubicacion"],
    },
    descripcion: {
      type: String,
      require: [true, "Necesita una descripcion"],
    },
    estatus: {
      type: String,
      enum: ["disponible", "vendido", "reservado"],
      default: "disponible",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("casa", casaSchema);
