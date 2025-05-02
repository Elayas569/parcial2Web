const express = require("express");
const router = express.Router();
const {
  getTarea,
  putTarea,
  deleteTarea,
  createTarea,
} = require("../controllers/tareaControllers");

//router.get('/login', (req, res) => {
//res.send('Obtener Tarea');
//});

router.get("/", getTarea);
router.put("/:id", putTarea);
router.delete("/:id", deleteTarea);
router.post("/", createTarea);

module.exports = router;
