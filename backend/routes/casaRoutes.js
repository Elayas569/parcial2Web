const express = require('express');
const router = express.Router();
const {
  getCasa,
  updateCasa,
  deleteCasa,
  createCasa,
} = require('../controllers/casaControllers');


router.get('/', getCasa);
router.put('/:id', updateCasa);
router.delete('/:id', deleteCasa);
router.post('/', createCasa);

module.exports = router;
