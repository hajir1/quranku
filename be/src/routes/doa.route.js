const router = require("express").Router();
const doaController = require("../controllers/doa.controller");

router.get("/", doaController.getDoaContoller);
router.get("/:id", doaController.getDoaByIdContoller);

module.exports = router;
