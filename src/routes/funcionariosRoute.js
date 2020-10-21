const express = require("express");
const router = express.Router();
const controller = require("../controller/funcionariosController");

router.get("/", controller.getAllFuncionarios);

router.get("/funcionarios/:id", controller.getByIdFuncionarios);

router.post("/", controller.postFuncionarios);

router.delete("/:id", controller.deleteFuncionarios);

module.exports = router; 