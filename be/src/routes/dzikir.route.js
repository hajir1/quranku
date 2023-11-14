const router = require("express").Router();
const doaController = require("../controllers/doa.controller");

router.get("/", doaController.getDzikirController);
router.get("/dzikirsore", doaController.getDzikirSoreController);
router.get("/dzikirpagi", doaController.getDzikirPagiController);
router.get("/asmaulHusna", doaController.getAsmaulHusnaController);
router.get("/asmaulHusna/:id", doaController.getAsmaulHusnaByIdController);

module.exports = router;
