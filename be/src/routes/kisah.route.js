const router = require("express").Router();
const kisahController = require("../controllers/kisah.controller");

router.get("/",kisahController.AllkisahController )
router.get("/:id",kisahController.kisahByIdController)

module.exports = router;
