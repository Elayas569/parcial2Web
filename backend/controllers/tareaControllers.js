const asyncHandler = require("express-async-handler");
const Tarea = require("../models/tareasModel");

const getTarea = asyncHandler(async (req, res) => {
  const tareas = await Tarea.find();
  res.status(200).json({ tareas });
});

const putTarea = asyncHandler(async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  if (!tarea) {
    res.status(404);
    throw new Error("tarea no encontrada");
  }

  const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(tareaUpdated);
});

const deleteTarea = asyncHandler(async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  if (!tarea) {
    res.status(404);
    throw new Error("tarea no encontrada");
  }

  await tarea.deleteOne();

  res.status(200).json({ id: req.params.id });
});

const createTarea = asyncHandler(async (req, res) => {
  if (!req.body.texto) {
    res.status(400);
    throw new Error("favor de escribir un texto");
  }
  const tarea = await Tarea.create({
    texto: req.body.texto,
  });
  res.status(201).json({ tarea });
});

module.exports = {
  getTarea,
  putTarea,
  deleteTarea,
  createTarea,
};
